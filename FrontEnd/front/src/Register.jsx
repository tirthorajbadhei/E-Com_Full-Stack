import "./App.css";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
    };
    try {
      await axios.post(
        "https://long-blue-antelope-slip.cyclic.app/register",
        payload
      );
    } catch (error) {
      console.log(error);
    }
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
                successfully registered!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">you've successfully registered!</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <a href="/login">
                <button type="button" className="btn btn-primary">
                  Login Now
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="flip-left" className="formDiv container-fluid">
        <h1>Register</h1>
        <form>
          <div data-aos="flip-down" className=" col-sm">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Enter Full Name
            </label>
            <input
              value={name}
              type="name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div data-aos="flip-up" className="col-sm">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div
              data-aos="flip-up"
              id="emailHelp"
              className="form-text"
              style={{ color: "white" }}
            >
              We'll never share your email with anyone else.
            </div>
          </div>
          <div data-aos="flip-down" className="col-sm">
            <label className="form-label">Password</label>
            <input
              value={password}
              type="name"
              className="form-control"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div data-aos="slide-left" className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              terms & conditions
            </label>
          </div>
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
