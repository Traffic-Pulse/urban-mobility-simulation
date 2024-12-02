import Member from "../components/Member";
import { reviews1, reviews2, reviews3 } from "../constants";

const OurTeam = () => {
  return (
    <div>
      <section className='max-container px-20 py-[90px] bg-[#f1f1f1]'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>
          Meet Our
          <span className='text-coral-green'> Amazing Team </span>
          !
        </h3>
        <p className='m-auto mt-4 max-w-lg  text-center info-text'>
        Our dedicated team is the backbone of our success, driven by passion, 
        innovation, and a shared commitment to delivering excellence in every 
        aspect of our work. Together, we strive to create meaningful experiences 
        for our customers and partners.
        </p>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews1.map((review, index) => (
            <Member
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              role={review.role}
              position={review.position}
            />
          ))}
        </div>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews2.map((review, index) => (
            <Member
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              role={review.role}
              position={review.position}
            />
          ))}
        </div>

        <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
          {reviews3.map((review, index) => (
            <Member
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              role={review.role}
              position={review.position}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurTeam;