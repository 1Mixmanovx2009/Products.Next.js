import './globals.css';
import Products from './components/Products';

export default async function Home() {
  try {
    const data = await fetch('https://dummyjson.com/products');
    const posts = await data.json();
    return (
      <div className='bg-gray-600'>
        <div className='bg-gray-800 text-[50px] text-white text-center py-5'>
          <h1>Products</h1>
        </div>
        <ul className='flex justify-between gap-7 pt-[50px] px-[40px] flex-wrap'>
          <Products data={posts} />
        </ul>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return <p style={{ color: 'red', fontWeight: 'bold' }}>Failed to load products.</p>;
  }
}