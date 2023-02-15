import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Validation = () => {
  const handleCheck = (e) => {
    e.preventDefault();
    window.location.href = "/checkout";
  };
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <div className="validDIV">
        <form className="row g-3 valid">
          <div className="col-md-6">
            <label
              data-aos="slide-down"
              htmlFor="inputEmail4"
              className="form-label"
            >
              Phone Number
            </label>
            <input
              data-aos="slide-up"
              type="number"
              className="form-control"
              id="inputEmail4"
              placeholder="+91"
            />
          </div>

          <div className="col-12">
            <label
              data-aos="slide-down"
              htmlFor="inputAddress"
              className="form-label"
            >
              Address
            </label>
            <input
              data-aos="slide-up"
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label
              data-aos="slide-down"
              htmlFor="inputAddress2"
              className="form-label"
            >
              Address 2
            </label>
            <input
              data-aos="slide-up"
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label
              data-aos="slide-down"
              htmlFor="inputCity"
              className="form-label"
            >
              City
            </label>
            <input
              data-aos="slide-up"
              type="text"
              className="form-control"
              id="inputCity"
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              State
            </label>
            <select
              data-aos="slide-down"
              id="inputState"
              className="form-select"
            >
              <option>Choose...</option>
              <option>West Bengal</option>
            </select>
          </div>
          <div className="col-md-2">
            <label
              data-aos="slide-down"
              htmlFor="inputZip"
              className="form-label"
            >
              Zip
            </label>
            <input
              data-aos="slide-up"
              type="text"
              className="form-control"
              id="inputZip"
            />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" htmlFor="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button
              onClick={handleCheck}
              type="submit"
              className="btn btn-primary"
            >
              Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Validation;
