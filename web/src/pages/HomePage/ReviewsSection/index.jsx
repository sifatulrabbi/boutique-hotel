import React from 'react';
import ReviewCard from './ReviewCard';
import {v4} from 'uuid';

const reviews = [
  {
    name: 'John Agar',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed totam voluptatibus non.',
    img: null,
  },
  {
    name: 'Betty Cooper',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed totam voluptatibus non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed totam voluptatibus non.',
    img: null,
  },
  {
    name: 'Nathan White',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed totam voluptatibus non. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: null,
  },
  {
    name: 'Willa Frazier',
    comment:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sed totam voluptatibus non. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    img: null,
  },
];

const ReviewsSection = () => {
  return (
    <div className='flex flex-col max-w-[100%]'>
      <h3 className='text-xl text-center max-w-[60vw] mx-auto font-bold text-textPrimary mb-8'>
        Some of our satisfied visitors
      </h3>
      {/* cards */}
      <div className='flex flex-row overflow-x-auto gap-6 p-2'>
        {reviews.map((item) => (
          <ReviewCard key={v4()} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
