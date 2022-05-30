import React from 'react';

const ReviewCard = ({img, comment}) => {
  return (
    <div className='flex flex-col gap-4 md:flex-row min-w-[280px] md:min-w-[400px] p-4 bg-white rounded-3xl select-none'>
      <div className='h-[50px] w-[50px] min-w-[50px] rounded-full overflow-hidden bg-gray-400'>
        {img && <img src={img} alt='' />}
      </div>
      <div>
        <p>{comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
