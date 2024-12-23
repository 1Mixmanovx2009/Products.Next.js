import React from 'react';
import Rating from '@mui/material/Rating';


const Detail = async ({ params }) => {
  const data = await fetch(`https://dummyjson.com/products/${params.id}`);
  const posts = await data.json();
  return (
    <div className='flex justify-center items-center h-screen'>
      <li className='flex w-[900px] gap-[40px] items-center p-[40px] rounded-[40px] mb-[20px] border-[7px] ' key={posts?.id}>
        <img src={posts?.thumbnail} alt="" width={300} />
        <div className='bg-gray-200 mt-[20px] p-3 rounded-lg'>
          <h3 className='text-[25px] mb-[5px]' title={posts?.title}>
            <strong>Name:</strong> {posts?.title}
          </h3>
          <div className='flex justify-between mb-[10px]'>
            <span className='text-[20px]'><strong>Price: </strong>{posts?.price}$</span>
            <span>{posts?.currency}</span>
          </div>
          <div>
            <p className='text-[20px]'><strong>Description:</strong> {posts?.description}</p>
          </div>
          <div className='flex items-center gap-3'>
            <Rating defaultValue={posts?.rating} size="medium" />
            <p className='text-[18px] font-semibold'>{posts?.rating}</p>
          </div>
        </div>
      </li>
    </div>
  );
};

export default Detail;