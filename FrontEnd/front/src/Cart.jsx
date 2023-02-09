import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [remove, setRemove] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  const handleRemove = async (id) => {
    try {
      await axios.delete(
        `https://long-blue-antelope-slip.cyclic.app/cart/${id}`
      );
      alert("item removed from cart");
    } catch (error) {
      console.log(error);
    }
  };
  axios
    .get("https://long-blue-antelope-slip.cyclic.app/cart")
    .then((r) => setCart(r.data))
    .catch((e) => console.log(e));
  return (
    <div className="cartdiv .container-fluid text-center">
      {cart.map((r) => {
        return (
          <div data-aos="flip-right" className="col cartDIV" key={r._id}>
            <img className="cartIMG" src={r.img_responsive} alt="" />
            <h5>{r.product_brand}</h5>
            <p>{r.product_name}</p>
            <p>{r.product_size}</p>
            <span> {r.product_strike}</span>
            <br />
            <button
              onClick={() => handleRemove(r._id)}
              style={{
                border: "none",
                color: "white",
                backgroundColor: "red",
                borderRadius: "5%",
              }}
            >
              Remove
            </button>
            <span> </span>
            <a href="/checkout">
              <button
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "10%",
                }}
              >
                Checkout
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
