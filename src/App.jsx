import React from "react";
import { Routes, Route } from "react-router-dom";
import RoyxatdanOtish from "./components/RoyxatdanOtish";
import Shop from "./components/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RoyxatdanOtish />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
