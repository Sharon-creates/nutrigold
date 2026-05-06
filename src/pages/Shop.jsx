import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { Filter } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Shop.css';

const Shop = () => {
  const [filter, setFilter] = useState('All');
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  
  const filteredProducts = filter === 'All' 
    ? products 
    : products.filter(p => p.size === filter);

  return (
    <div className="shop-page page-padding">
      <div className="container">

        <div className="page-header text-center">
          <h1 className="section-title">Shop Nutrigold</h1>
          <p className="section-subtitle">Find the perfect size for your cooking needs.</p>
        </div>

        <div className="shop-controls flex justify-center items-center gap-6 mb-8">
          <div className="filter-wrapper flex items-center gap-4">
            <Filter size={20} className="text-light" />
            <div className="filter-buttons flex gap-4">
              <button 
                className={`filter-btn ${filter === 'All' ? 'active' : ''}`}
                onClick={() => setFilter('All')}
              >All</button>
              <button 
                className={`filter-btn ${filter === '1L' ? 'active' : ''}`}
                onClick={() => setFilter('1L')}
              >1 Liter</button>
              <button 
                className={`filter-btn ${filter === '3L' ? 'active' : ''}`}
                onClick={() => setFilter('3L')}
              >3 Liters</button>
              <button 
                className={`filter-btn ${filter === '5L' ? 'active' : ''}`}
                onClick={() => setFilter('5L')}
              >5 Liters</button>
              <button 
                className={`filter-btn ${filter === '25L' ? 'active' : ''}`}
                onClick={() => setFilter('25L')}
              >25 Liters</button>
            </div>
          </div>
        </div>

        <div className="shop-products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card animate-fade-in">
              <Link to={`/product/${product.id}`} className="product-img-wrapper">
                <img src={product.image} alt={product.name} loading="lazy" />
                <div className="product-size-badge">{product.size}</div>
              </Link>
              <div className="product-info">
                <h3><Link to={`/product/${product.id}`}>{product.name}</Link></h3>
                <button 
                  className="btn btn-primary product-btn" 
                  onClick={() => {
                    addToCart(product);
                    navigate('/cart');
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
