const fs = require('fs');
const path = require('path');
const axios = require('axios');
const { exec } = require('child_process');

const downloadOSM = async (req, res) => {
    const bbox = req.query.bbox; // Get the bounding box from the query parameters
    const overpassUrl = `https://overpass-api.de/api/map?bbox=${bbox}`;

    try {
        // Download the OSM file
        const response = await axios.get(overpassUrl, { responseType: 'arraybuffer' });

        // Create a folder with the current date and time
        const currentTime = new Date().toISOString().replace(/[:.]/g, '-'); // Date and time format suitable for folder names
        const outputDir = path.join(__dirname, currentTime);
        fs.mkdirSync(outputDir, { recursive: true }); // Ensure the directory is created

        const osmFilePath = path.join(outputDir, 'map.osm'); // Save the OSM file inside the new folder

        // Save the OSM file to the server
        fs.writeFileSync(osmFilePath, response.data);
        console.log(`OSM file downloaded and saved in ${osmFilePath}.`);

        // Execute SUMO commands
        await executeSUMOCommands(osmFilePath, outputDir);

        // Respond with the downloaded file
        res.setHeader('Content-Type', 'application/octet-stream');
        res.setHeader('Content-Disposition', `attachment; filename="map.osm"`);
        res.send(response.data);
    } catch (error) {
        console.error('Error downloading OSM data:', error);
        res.status(500).send(`Error downloading OSM data: ${error.message}`);
    }
};

const executeSUMOCommands = async (osmFilePath, outputDir) => {
    return new Promise((resolve, reject) => {
        const workingDir = outputDir; // Set the working directory to the output directory

        // Command to convert OSM to SUMO network
        const netConvertCommand = `netconvert --osm-files "${osmFilePath}" -o map.net.xml`;
        exec(netConvertCommand, { cwd: workingDir }, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error during netconvert: ${stderr}`);
                return reject(`netconvert error: ${stderr}`);
            }
            console.log(`netconvert output: ${stdout}`);

            // Command to generate random trips
            const randomTripsCommand = `python "${process.env.SUMO_HOME}/tools/randomTrips.py" -n map.net.xml -r map.rou.xml -e 100`;
            exec(randomTripsCommand, { cwd: workingDir }, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error during randomTrips: ${stderr}`);
                    return reject(`randomTrips error: ${stderr}`);
                }
                console.log(`randomTrips output: ${stdout}`);

                // Create SUMO configuration file
                const sumoConfigContent = `<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <input>
        <net-file value="map.net.xml"/>
        <route-files value="map.rou.xml"/>
    </input>
    <time>
        <begin value="0"/>
        <end value="100"/>
    </time>
</configuration>`;

                // Write the SUMO configuration file
                fs.writeFile(path.join(workingDir, 'mySimulation.sumocfg'), sumoConfigContent, (err) => {
                    if (err) {
                        console.error(`Error creating SUMO config: ${err.message}`);
                        return reject(`SUMO config error: ${err.message}`);
                    }
                    console.log('SUMO configuration file created.');

                    // Start SUMO GUI
                    exec('sumo-gui -c mySimulation.sumocfg', { cwd: workingDir }, (error, stdout, stderr) => {
                        if (error) {
                            console.error(`Error starting SUMO GUI: ${stderr}`);
                            return reject(`SUMO GUI error: ${stderr}`);
                        }
                        console.log(`SUMO GUI started successfully.`);
                        resolve();
                    });
                });
            });
        });
    });
};

module.exports = {
    downloadOSM,
};

