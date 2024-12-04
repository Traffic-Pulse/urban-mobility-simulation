import Video1 from '../images/video1.mp4';
import Video2 from '../images/video2.mp4';

const Feature2 = () => {
  return (
    <>
      <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container pt-[40px] pb-[90px] px-20'>
        <div className='flex flex-1'>
          {/* <img
            src={img3}
            width={773}
            height={687}
            className='object-contain w-full'
          /> */}
          <video
            className=""
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-1xl font-palanquin font-bold'>
            <span className='text-coral-green'>We are the best right now!! </span>
          </h2>
          <p className='mt-4 info-text text-justify'>
          Experience a groundbreaking approach to urban traffic management with our advanced Traffic and Urban Mobility Simulation. By combining cutting-edge technology and data-driven insights, our solution empowers city planners to analyze traffic flow, reduce congestion, and design smarter, more efficient transportation systems.
          </p>
          <p className='mt-6 info-text text-justify'>
          Explore a versatile platform that models diverse scenarios, evaluates environmental impacts, and offers innovative solutions for urban mobility challenges. Our simulation tool is designed to transform urban living by creating sustainable, connected, and resilient cities for the future.
          </p>
        </div>
      </section>

      <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container pt-[40px] pb-[90px] px-20'>
        <div className='flex flex-1 flex-col'>
          <h2 className='text-1xl font-palanquin font-bold'>
            <span className='text-coral-green'>How to use? </span>
          </h2>
          <p className='mt-4 info-text text-justify'>
            Generating your simulation is simple and intuitive. Start by searching for your desired area using our powerful location search tool. With an easy-to-use interface, you can pinpoint any urban or traffic region you wish to analyze.
          </p>
          <p className='mt-6 info-text text-justify'>
            Once you've found your area, select the specific region you want to simulate. Finally, click 'Generate Simulation' to visualize traffic flow, analyze patterns, and explore solutions tailored to your needs. In just three steps, you can unlock the insights needed for smarter urban planning.
          </p>
        </div>
        <div className='flex flex-1'>
          <video
            className=""
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Video2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
};

export default Feature2;