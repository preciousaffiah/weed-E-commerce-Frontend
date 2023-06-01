import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Category from "./public/pages/Category";
import Home from "./public/pages/Home";
import Product from "./public/pages/Product";
import Cart from "./public/pages/Cart";
import Register from "./public/pages/Register";
import Login from "./public/pages/Login";
import Mail from "./public/pages/mail";
import { getcart } from "./public/utils/APIroutes";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  let user_id = JSON.parse(localStorage.getItem('loggedInUser'));
  const [cartCount, setMycartCount] = useState([0]);

  useEffect(() => {
    if (user_id) {
      axios.get(`${getcart}/${user_id}`).then((response) => {
        if (response.data.status === "SUCCESS") {
          setMycartCount(response.data.message.length);
        }
      });
    }
  }, [count, user_id]);
  
 return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id} />}
          />
          <Route path="/register" element={<Register user_id={user_id} />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/login" element={<Login user_id={user_id} />} />
          <Route
            path="/shop"
            element={<Category cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id} />}
          />
          <Route
            path="/product/:product_id"
            element={<Product cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id} />}
          />
          <Route
            path="/cart"
            element={<Cart cartCount={cartCount} setMycartCount={setMycartCount} count={count} setCount={setCount} user_id={user_id} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
