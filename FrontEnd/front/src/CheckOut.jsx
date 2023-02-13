import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useState, useEffect } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";

const CheckOut = () => {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;

    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const handlePay = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Payment Successfull!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">your order is placed!</div>
            <div className="modal-footer">
              <a href="/">
                <button type="button" className="btn btn-primary">
                  Close
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="slide-left" id="PaymentForm">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
      </div>
      <br />
      <div data-aos="slide-right" className="checkout">
        <form>
          <input
            type="number"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="name"
            name="name"
            placeholder="Full Name"
            value={state.name}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="name"
            name="expiry"
            placeholder="expiry"
            value={state.expiry}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <input
            type="name"
            name="cvc"
            placeholder="cvc"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
          />
          <button
            onClick={handlePay}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="submit"
          >
            Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
