import React, { useState } from "react";
import Telifon from "./Telifon";
import "../App.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./SearchBar";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const addToCart = (phone) => {
    setCart([...cart, phone]);
    toast.success("📦 Mahsulot savatga qo‘shildi!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    toast.error("❌ Mahsulot savatdan olib tashlandi!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  const handlePurchase = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    toast.success("✅ Mahsulot xarid qilindi!", {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
  };

  return (
    <div className="shop">
      <div className="shop-header">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="shop-title">📱 Telefon Do'koni</h1>
        <button className="cart-btn" onClick={() => setOpen(!open)}>
          🛒 Korzinka ({cart.length})
        </button>
      </div>

      {open && (
        <div className="cart">
          <h2>Savat:</h2>
          <div className="cart-items">
            {cart.length === 0 ? (
              <p>Savat bo‘sh</p>
            ) : (
              cart.map((item, i) => (
                <div key={i} className="cart-card">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.price}</p>
                    <button onClick={() => handlePurchase(i)} className="buy-btn">
                      Xarid qilish
                    </button>
                    <button onClick={() => removeFromCart(i)} className="remove-btn">
                      Bekor qilish
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <Telifon onAddToCart={addToCart} searchTerm={searchTerm} />
      <ToastContainer />
    </div>
  );
};

export default Shop;
