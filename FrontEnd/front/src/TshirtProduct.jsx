import { useParams } from "react-router-dom";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
const TshirtProduct = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    Aos.init({ duration: 1200 });
    axios
      .get(`https://long-blue-antelope-slip.cyclic.app/tshirt/${id}`)
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
              ||
              <span className="price1"> {r.product_discountPercentage}</span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TshirtProduct;
