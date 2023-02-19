import React from 'react';

function CarouselNumbers({ current, total }) {
  return (
    <div className='carouselNumbersParent'>
      <div className='carouselNumbers'>
        <div className='carouselNumber'>{current}</div>
        <div className='multiLines'>
          <div className='line1' style={{ height: `${(Number(current) / Number(total)) * 100}%` }}></div>
          <div className='line2' style={{ height: `${(1 - Number(current) / Number(total)) * 100}%` }}></div>
        </div>
        <div className='carouselNumber'>{total}</div>
      </div>
    </div>
  );
}

export default CarouselNumbers;
