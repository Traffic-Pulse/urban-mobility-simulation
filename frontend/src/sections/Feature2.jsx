import { arrowRight,github } from "../images/icons";
import { img3 } from "../images";
import Button from "../components/Button";

const Feature2 = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container py-[90px] px-20'>
      <div className='flex flex-1'>
        <img
          src={img3}
          width={773}
          height={687}
          className='object-contain w-full'
          alt="img"
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-green'>Our </span>
          Solution
        </h2>
        <p className='mt-4 info-text text-justify'>
        Experience a groundbreaking approach to urban traffic management with our advanced Traffic and Urban Mobility Simulation. By combining cutting-edge technology and data-driven insights, our solution empowers city planners to analyze traffic flow, reduce congestion, and design smarter, more efficient transportation systems.
        </p>
        <p className='mt-6 info-text text-justify'>
        Explore a versatile platform that models diverse scenarios, evaluates environmental impacts, and offers innovative solutions for urban mobility challenges. Our simulation tool is designed to transform urban living by creating sustainable, connected, and resilient cities for the future.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
        <Button 
          label='Contact Us' 
          iconURL={arrowRight} 
          href='/contact' 
        />

        <Button
          label='Github'
          iconURL={github}
          backgroundColor='bg-white'
          borderColor='border-slate-gray'
          textColor='text-slate-gray'
          href='https://github.com/Traffic-Pulse/urban-mobility-simulation/tree/development'
        />
        </div>
      </div>
    </section>
  );
};

export default Feature2;