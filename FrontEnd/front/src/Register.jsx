import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Register = () => {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <div data-aos="flip-left" className="formDiv container-fluid">
        <h1>Register</h1>
        <form>
          <div data-aos="flip-down" className=" col-sm">
            <label for="exampleInputEmail1" className="form-label">
              Enter Full Name
            </label>
            <input type="name" className="form-control" />
          </div>
          <div data-aos="flip-up" className="col-sm">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
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
            <label className="form-check-label" for="exampleCheck1">
              terms & conditions
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
