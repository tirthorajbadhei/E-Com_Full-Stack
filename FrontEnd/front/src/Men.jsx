import axios from "axios";
import { useState, useEffect } from "react";
import Loading from "./Loading";
import "./App.css";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
const Men = () => {
  const [product, setProduct] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    const getData = async () => {
      setLoad(true);
      await axios
        .get("https://long-blue-antelope-slip.cyclic.app/men")
        .then((r) => setProduct(r.data))
        .catch((e) => console.log(e));
      setLoad(false);
    };
    getData();
  }, []);
  console.log(product);
  if (load) {
    return <Loading />;
  }
  return (
    <div className="product_img">
      {product.map((r) => {
        return (
          <div data-aos="zoom-in" className="col-sm product_div" key={r._id}>
            <a className="text" href={`/men/product/${r._id}`}>
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

export default Men;
