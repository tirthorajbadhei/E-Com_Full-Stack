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
const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/register" element={<Register />}>
          Home
        </Route>
        <Route path="/login" element={<Login />}>
          Home
        </Route>
        <Route path="/glasses" element={<Glasses />}>
          Home
        </Route>
        <Route path="/kids" element={<Kids />}>
          Home
        </Route>
        <Route path="/men" element={<Men />}>
          Home
        </Route>
        <Route path="/women" element={<Women />}>
          Home
        </Route>
        <Route path="/watch" element={<Watch />}>
          Home
        </Route>
        <Route path="/tshirt" element={<Tshirt />}>
          Home
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoute;
