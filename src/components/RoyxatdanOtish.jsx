import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const RoyxatdanOtish = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("✅ Muvaffaqiyatli ro'yxatdan o'tdingiz!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    // 3 sekunddan keyin shop sahifasiga o'tkazadi
    setTimeout(() => {
      window.location.href = "/shop";
    }, 3000);
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <fieldset className="register-fieldset">
          <input className="register-input" type="text" placeholder="Ismingiz" required />
          <input className="register-input" type="email" placeholder="Email" required />
          <input className="register-input" type="password" placeholder="Parol" required />
          <button className="register-button" type="submit">O‘tish</button>
        </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RoyxatdanOtish;
