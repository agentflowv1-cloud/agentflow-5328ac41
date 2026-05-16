import React from 'react';
import './ProductCard.css';
interface Product {
  id: number;
  image: string;
  description: string;
  price: number;
}
interface ProductCardProps {
  product: Product;
}
function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={product.image} alt="Product Image" />
      <h2>{product.description}</h2>
      <p>Price: ${product.price}</p>
      <button>Buy Now</button>
    </div>
  );
}
export default ProductCard;