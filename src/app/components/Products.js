'use client'
import React from 'react'
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/navigation';

const Products = ({ data }) => {
    const router = useRouter();
    if (!data || !data.products) {
        return <p>No products available.</p>;
    }

    return (
        <>
            {data.products.map((product) => (
                <li className='w-[300px] bg-black p-7 rounded-lg mb-[20px]' key={product.id}>
                    <img onClick={() => router.push(`/product/${product.id}`)} src={product.thumbnail} alt="" width={300} />
                    <div className='bg-gray-200 mt-[20px] p-3 rounded-lg'>
                        <h3 className='text-[25px] truncate-2-lines mb-[5px]' title={product.title}>
                            <strong>Name:</strong> {product.title}
                        </h3>
                        <div className='flex justify-between mb-[10px]'>
                            <span className='text-[20px]'><strong>Price: </strong>{product.price}$</span>
                            <span>{product.currency}</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Rating defaultValue={product.rating} size="medium" />
                            <p className='text-[18px] font-semibold'>{product.rating}</p>
                        </div>
                    </div>
                </li>
            ))}
        </>

    )
}

export default Products