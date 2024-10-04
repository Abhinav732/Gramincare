import React from 'react'
import '@radix-ui/themes/styles.css';
import  './card.css';



function Card({ imageSrc, heading }) {
  return (
    <div className='card-box'>
      <img src={imageSrc} alt={heading} className='feature-img' />
      <p className='para'>{heading}</p>
    </div>
  );
}

export default Card;
