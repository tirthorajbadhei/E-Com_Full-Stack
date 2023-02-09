import { useParams } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
const KidsProduct = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleReduce = () => {
    setCount((prev) => prev - 1);
  };
  const handleCart = async (
    img_responsive,
    product_brand,
    product_name,
    product_size,
    product_strike
  ) => {
    const payload = {
      img_responsive,
      product_brand,
      product_name,
      product_size,
      product_strike,
    };
    try {
      await axios.post(
        `https://long-blue-antelope-slip.cyclic.app/post/cart`,
        payload
      );
      alert("product added to the Cart");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1200 });
    axios
      .get(`https://long-blue-antelope-slip.cyclic.app/kids/${id}`)
      .then((r) => setUser(r.data))
      .catch((e) => console.log(e));
  }, [id]);

  return (
    <div>
      {user.map((r) => {
        return (
          <div
            data-aos="slide-right"
            className="productPage col-sm"
            key={r._id}
          >
            <img src={r.img_responsive} alt="" />
            <h5>{r.product_brand}</h5>
            <p>{r.product_name}</p>
            <span>
              Price<span className="price"> {r.product_strike}</span>||
              <span className="price1"> {r.product_discountedPrice}</span>
            </span>
            <br />

            <button disabled={count === 0} onClick={handleReduce}>
              -
            </button>
            <button onClick={handleAdd}>+</button>
            <p>Qty: {count}</p>
            <p style={{ fontWeight: "bold" }}>Product Size- {r.product_size}</p>
            <span>
              Rating: {r.product_ratingsContainer} ({r.product_ratingsCount}
              -people rate this)
            </span>
            <br />
            <button
              onClick={() =>
                handleCart(
                  r.img_responsive,
                  r.product_brand,
                  r.product_name,
                  r.product_size,
                  r.product_strike
                )
              }
              style={{
                border: "none",
                color: "white",
                backgroundColor: "gray",
                borderRadius: "5%",
              }}
            >
              Add to Cart
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
                Buy
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default KidsProduct;
