import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Tshirt = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1000 });
    axios
      .get("https://long-blue-antelope-slip.cyclic.app/tshirt")
      .then((r) => setProduct(r.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="product_img">
      {product.map((r) => {
        return (
          <div data-aos="zoom-in" className="col-sm product_div" key={r._id}>
            <a className="text" href={`/tshirt/product/${r._id}`}>
              <img src={r.img_responsive} alt="" />
              <h5>{r.product_brand}</h5>
              <p>{r.product_name}</p>
              <span>
                Price<span className="price"> {r.product_strike}</span>||
                <span className="price1"> {r.product_discountedPrice}</span>
                ||
                <span className="price1"> {r.product_discountPercentage}</span>
              </span>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Tshirt;
