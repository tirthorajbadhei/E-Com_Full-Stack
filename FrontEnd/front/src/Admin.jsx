import "./App.css";
import Aos from "aos";

import { useEffect } from "react";
import "aos/dist/aos.css";
const Admin = () => {
  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  return (
    <div>
      <div className="container text-center admin">
        <div className="row">
          <div data-aos="slide-right" className="col adminhead">
            <h1>Users Details</h1>
          </div>
          <div data-aos="slide-left" className="col adminhead">
            <h1>Products Details</h1>
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <div className="row">
          <div data-aos="slide-right" className="col  usersdetail">
            <h1>Users Details</h1>
          </div>
          <div data-aos="slide-left" className="col usersdetail">
            <h1>Products Details</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
