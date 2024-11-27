import { arrowRight } from "../images/icons";
import { img2 } from "../images";
import Button from "../components/Button";

const Feature2 = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container py-[90px] px-20'>
      <div className='flex flex-1'>
        <img
          src={img2}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-palanquin font-bold'>
          <span className='text-coral-green'>Special </span>
          Offer
        </h2>
        <p className='mt-4 info-text'>
          Set out on a shopping adventure that will transform your shopping experience with unbelievable deals. From premium options to exceptional savings, we provide unrivaled value that sets us apart.
        </p>
        <p className='mt-6 info-text'>
          Navigate a realm of possibilities tailored to suit your specific desires while exceeding your highest expectations. Your trip with us has been nothing short of extraordinary.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight} />
          <Button
            label='Learn more'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
    </section>
  );
};

export default Feature2;