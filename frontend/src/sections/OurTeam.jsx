import Member from "../components/Member";
import { reviews1, reviews2, reviews3 } from "../constants";

const OurTeam = () => {
  return (
    <div>
      <section className='max-container px-20 py-[90px] bg-[#f1f1f1]'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>
          What Our
          <span className='text-coral-green'> Customers </span>
          Say?
        </h3>
        <p className='m-auto mt-4 max-w-lg  text-center info-text'>
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews1.map((review, index) => (
            <Member
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews2.map((review, index) => (
            <Member
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews3.map((review, index) => (
            <Member
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;