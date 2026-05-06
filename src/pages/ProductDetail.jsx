import React, { useState, useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Check, ShieldCheck } from 'lucide-react';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  if (!product) {
    return <div className="page-padding text-center">Product not found. <Link to="/shop">Return to Shop</Link></div>;
  }

  return (
    <div className="product-detail-page page-padding">
      <div className="container">
        


        <div className="product-layout grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 xl:gap-40 items-center">
          
          <div className="product-gallery animate-fade-in">
            <div className="product-img-main">
              <img src={product.image} alt={product.name} />
            </div>
          </div>

          <div className="product-details animate-fade-in">
            <div className="product-meta">
              <span className="size-label">{product.size}</span>
            </div>
            <h1 className="product-title">{product.name}</h1>
            
            <p className="product-desc">{product.description}</p>
            
            <div className="benefits-list">
              <div className="benefit-item"><Check size={20} className="check-icon"/> <span>100% Pure and Cholesterol Free</span></div>
              <div className="benefit-item"><Check size={20} className="check-icon"/> <span>Fortified with Vitamin A</span></div>
              <div className="benefit-item"><Check size={20} className="check-icon"/> <span>Does not foam or fume</span></div>
            </div>

            <div className="add-to-cart-action">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button 
                className="btn btn-primary add-btn flex items-center justify-center gap-4"
                onClick={() => {
                  addToCart(product, quantity);
                  navigate('/cart');
                }}
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>

            <div className="trust-badge flex items-center gap-4 mt-8">
              <ShieldCheck size={24} className="text-primary-gold" />
              <span>100% Secure Checkout. Hygienically sealed.</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
