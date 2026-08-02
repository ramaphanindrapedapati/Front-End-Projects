import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Cart from "./Cart";
import "./CustomerDashboard.css";

function CustomerDashboard() {
  const [cart, setCart] = useState([]);
  const { setUserRole } = useContext(AuthContext);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Smart Watch Pro X",
      price: 4999,
      image: "https://via.placeholder.com/300",
      category: "Wearables",
      rating: "4.5 ⭐",
      description: "AMOLED display, Heart-rate monitor, Waterproof IP68, 7-day battery"
    },
    {
      id: 2,
      name: "Wireless Headphones Max",
      price: 2499,
      image: "https://via.placeholder.com/300",
      category: "Audio",
      rating: "4.3 ⭐",
      description: "Active noise cancellation, 40hr battery, Deep bass sound"
    },
    {
      id: 3,
      name: "Gaming Laptop Xtreme",
      price: 89999,
      image: "https://via.placeholder.com/300",
      category: "Computers",
      rating: "4.8 ⭐",
      description: "RTX 4060, 16GB RAM, 1TB SSD, 144Hz Display"
    },
    {
      id: 4,
      name: "iPhone Ultra 15",
      price: 129999,
      image: "https://via.placeholder.com/300",
      category: "Mobile Phones",
      rating: "4.9 ⭐",
      description: "A17 Chip, 48MP Camera, 120Hz ProMotion"
    },
    {
      id: 5,
      name: "Bluetooth Speaker Boom",
      price: 1999,
      image: "https://via.placeholder.com/300",
      category: "Audio",
      rating: "4.2 ⭐",
      description: "360° Sound, Waterproof, 12hr playback"
    },
    {
      id: 6,
      name: "Mechanical Gaming Keyboard",
      price: 3499,
      image: "https://via.placeholder.com/300",
      category: "Accessories",
      rating: "4.6 ⭐",
      description: "RGB Lighting, Blue switches, Anti-ghosting"
    },
    {
      id: 7,
      name: "4K Smart LED TV 55\"",
      price: 45999,
      image: "https://via.placeholder.com/300",
      category: "Electronics",
      rating: "4.7 ⭐",
      description: "Dolby Vision, Android TV, Voice Remote"
    },
    {
      id: 8,
      name: "Premium Office Chair",
      price: 8999,
      image: "https://via.placeholder.com/300",
      category: "Furniture",
      rating: "4.4 ⭐",
      description: "Ergonomic design, Lumbar support"
    },
    {
      id: 9,
      name: "DSLR Camera ProShot",
      price: 55999,
      image: "https://via.placeholder.com/300",
      category: "Cameras",
      rating: "4.6 ⭐",
      description: "24MP sensor, 4K video, Image stabilization"
    },
    {
      id: 10,
      name: "Power Bank 20000mAh",
      price: 1499,
      image: "https://via.placeholder.com/300",
      category: "Accessories",
      rating: "4.1 ⭐",
      description: "Fast charging, Dual USB output"
    }
  ];

  const handleLogout = () => {
    setUserRole(null);
    navigate("/");
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <div className="customer-dashboard">

      <div className="navbar">
        <h2>TechNova Store</h2>

        <div className="nav-right">
          <div className="cart-badge">
            🛒 {totalItems}
          </div>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>

      <div className="products">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="rating">{product.rating}</p>
            <p className="price">₹{product.price}</p>
            <p>{product.description}</p>

            <button onClick={() => addToCart(product)}>
              Add To Cart
            </button>
          </div>
        ))}
      </div>

      <Cart
        cart={cart}
        increaseQty={increaseQty}
        decreaseQty={decreaseQty}
        removeItem={removeItem}
        totalPrice={totalPrice}
        clearCart={clearCart}
      />

    </div>
  );
}

export default CustomerDashboard;