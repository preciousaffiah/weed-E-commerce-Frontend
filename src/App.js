import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Category from "./public/pages/Category";
import Home from "./public/pages/Home";
import Product from "./public/pages/Product";
import Cart from "./public/pages/Cart";
import Register from "./public/pages/Register";
import Login from "./public/pages/Login";
import Mail from "./public/pages/mail";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home count={count} setCount={setCount} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/shop"
            element={<Category count={count} setCount={setCount} />}
          />
          <Route
            path="/product/:product_id"
            element={<Product count={count} setCount={setCount} />}
          />
          <Route
            path="/cart"
            element={<Cart count={count} setCount={setCount} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
