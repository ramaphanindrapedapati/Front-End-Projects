import React from "react";
import "./Cart.css";

function Cart({
  cart,
  increaseQty,
  decreaseQty,
  removeItem,
  totalPrice,
  clearCart
}) {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p>
                  Subtotal: ₹{item.price * item.quantity}
                </p>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{totalPrice}</h3>

          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;