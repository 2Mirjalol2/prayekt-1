import React from "react";

const Cart = ({ cartItems, onRemoveFromCart, onPurchase }) => {
  return (
    <div className="cart">
      <h2>Savat</h2>
      {cartItems.length === 0 ? (
        <p>Savat bo‘sh</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
              <button onClick={() => onPurchase(item)}>Xarid qilish</button>
              <button onClick={() => onRemoveFromCart(item)}>Bekor qilish</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
