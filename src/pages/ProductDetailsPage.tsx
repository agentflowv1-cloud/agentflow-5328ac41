import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../store';
import { Product } from '../types';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const { addItemToCart } = useStore();

  const productData = {
    id: 1,
    name: 'Product 1',
    description: 'This is product 1',
    image: 'https://example.com/product1.jpg'
  };

  useEffect(() => {
    setProduct(productData);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addItemToCart(product);
      navigate('/cart');
    }
  };

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.name} />
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export { ProductDetailsPage };