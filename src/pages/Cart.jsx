import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, ArrowRight, ArrowLeft } from 'lucide-react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    let message = "🛒 *NEW ORDER FROM WEBSITE*\n\n";
    message += "Hello Nutrigold, I’d like to place an order:\n\n";
    message += "*Order Details*\n";
    message += "---------------------------\n";
    
    cartItems.forEach((item) => {
      message += `• ${item.name} × ${item.quantity} \n`;
    });
    
    message += "---------------------------\n\n";
    message += "Kindly confirm availability, payment options, and delivery details.\n\n";
    message += "Thank you.";

    const whatsappUrl = `https://wa.me/2348079248456?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page page-padding">
        <div className="container">
          <button onClick={() => navigate(-1)} className="back-btn flex items-center gap-2 mb-8 text-light hover-gold">
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
          <div className="text-center min-vh-50 flex items-center justify-center flex-col">
            <h2 className="section-title">Your Cart is Empty</h2>
            <p className="mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn btn-primary inline-flex">Go to Shop</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page page-padding">
      <div className="container">
        <button onClick={() => navigate(-1)} className="back-btn flex items-center gap-2 mb-8 text-light hover-gold">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="section-title mb-8">Your Cart</h1>
        
        <div className="cart-layout grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="cart-items lg:col-span-2">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item flex items-center gap-6">
                <img src={item.image} alt={item.name} className="cart-item-img" />
                <div className="cart-item-details flex-1">
                  <h3>{item.name}</h3>
                </div>
                <div className="quantity-selector">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button 
                  className="remove-btn text-danger transition" 
                  onClick={() => removeFromCart(item.id)}
                  title="Remove Item"
                >
                  <Trash2 size={24} />
                </button>
              </div>
            ))}
          </div>
          
          <div className="cart-summary animate-fade-in p-8 rounded border border-gray-lighter h-max">
            <h2>Order Summary</h2>
            <div className="summary-row flex justify-between pb-6 border-bottom border-gray-lighter mt-6 mb-6 opacity-70">
              <span>Shipping & Total</span>
              <span>Calculated later</span>
            </div>
            <button 
              className="btn btn-primary w-full flex justify-center items-center gap-4"
              onClick={handleCheckout}
            >
              <span>Checkout via WhatsApp</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
