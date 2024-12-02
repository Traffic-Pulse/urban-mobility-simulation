import React from 'react'

const Member = ({ imgURL, customerName, role, position }) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <img
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <div className='mt-2 flex justify-center items-center gap-2.5'>
        
        <p className='text-xl font-montserrat text-slate-gray'>{role}</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
      <p className='mt-3 max-w-sm text-center info-text'>{position}</p>
    </div>
  );
};

export default Member;
