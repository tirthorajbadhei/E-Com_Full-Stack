import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
const AdminLogin = () => {
  const { isAuth, handleAuth } = useContext(AuthContext);
  if (isAuth) {
    return <Navigate to={"/admin"} />;
  }
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <div data-aos="flip-left" className="formDiv container-fluid">
        <h1>Admin Entry</h1>
        <form>
          <div data-aos="flip-down" className="col-sm">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
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
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <br />
          <button
            onClick={handleAuth}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
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
export default AdminLogin;
