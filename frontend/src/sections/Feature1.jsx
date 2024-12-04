import { img2 } from "../images";

const Feature1 = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container p-8 md:p-16'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Real-Time Traffic Simulation System
        </h2>
        <p className='mt-4 lg:max-w-lg info-text text-justify'>
          Traffic Pulse is dedicated to designing and building a real-time traffic simulation system that optimizes existing roads, improves commute times, reduces CO2 emissions, and promotes sustainability. Our team is committed to enhancing urban mobility analysis and traffic management through innovative technology.
        </p>
        {/* <div className='mt-11'>
          <Button label='View details' />
        </div> */}
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={img2}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default Feature1;