import { useEffect, useState } from 'react';
import Product from './product';

export default function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);
  return (
    <section className='grid grid-cols-2 gap-3 p-6 md:px-60 md:py-10 md:gap-5 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((el) => (
        <Product key={el.id} {...el} />
      ))}
    </section>
  );
}
