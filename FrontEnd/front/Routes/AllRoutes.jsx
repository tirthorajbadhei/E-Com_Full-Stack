import { Routes, Route } from "react-router-dom";

import Home from "../src/Home";
import Register from "../src/Register";
import Login from "../src/Login";
import Glasses from "../src/Glasses";
import Men from "../src/Men";
import Women from "../src/Women";
import Kids from "../src/Kids";
import Tshirt from "../src/Tshirt";
import Watch from "../src/Watch";
import Cart from "../src/Cart";
import Product from "../src/Product";
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/register" element={<Register />}>
          Register
        </Route>
        <Route path="/login" element={<Login />}>
          Login
        </Route>
        <Route path="/glasses" element={<Glasses />}>
          Glass
        </Route>
        <Route path="/kids" element={<Kids />}>
          Kids
        </Route>
        <Route path="/men" element={<Men />}>
          Men
        </Route>
        <Route path="/women" element={<Women />}>
          Women
        </Route>
        <Route path="/watch" element={<Watch />}>
          Watch
        </Route>
        <Route path="/tshirt" element={<Tshirt />}>
          Tshirt
        </Route>
        <Route path="/cart" element={<Cart />}>
          Cart
        </Route>
        <Route path="/product" element={<Product />}>
          Product
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
