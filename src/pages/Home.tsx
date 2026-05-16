import React from 'react';
import './Home.css';
import ProductCard from '../components/ProductCard';
const products = [
  { id: 1, image: 'https://picsum.photos/200/300', description: 'Product 1', price: 10.99 },
  { id: 2, image: 'https://picsum.photos/200/301', description: 'Product 2', price: 9.99 },
  { id: 3, image: 'https://picsum.photos/200/302', description: 'Product 3', price: 12.99 }
];
function Home() {
  return (
    <div className="home-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Home;