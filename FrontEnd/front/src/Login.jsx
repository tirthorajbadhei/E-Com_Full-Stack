import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };
    try {
      await axios
        .post("https://long-blue-antelope-slip.cyclic.app/login", payload)
        .then((r) => localStorage.setItem("token", r.data.token));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                successfully logged in!
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">you've successfully logged in!</div>
            <div className="modal-footer">
              <a href="/">
                <button type="button" className="btn btn-primary">
                  Close
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
      <div data-aos="flip-left" className="formDiv container-fluid">
        <h1>Login</h1>
        <form>
          <div data-aos="flip-down" className="col-sm">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div data-aos="flip-up" className="col-sm">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
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
            data-aos="slide-left"
            type="submit"
            className="btn btn-primary"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
