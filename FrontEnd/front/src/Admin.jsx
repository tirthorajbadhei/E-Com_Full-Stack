import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "axios";
const Admin = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    Aos.init({ duration: 1600 });
  }, []);
  try {
    axios
      .get("https://long-blue-antelope-slip.cyclic.app/user")
      .then((r) => setUser(r.data))
      .catch((e) => console.log(e));
  } catch (error) {
    console.log(error);
  }

  const handleUser = async (id) => {
    try {
      await axios.delete(
        `https://long-blue-antelope-slip.cyclic.app/user/${id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container text-center admin">
        <div className="row">
          <div data-aos="slide-right" className="col adminhead">
            <h1>Users Details</h1>
          </div>
        </div>
      </div>
      <div className="container text-center ">
        <div className="row">
          <div data-aos="slide-right" className="col  usersdetail">
            <h1>All Users Details</h1>
            {user.map((r) => {
              return (
                <div className="userDIV" key={r._id}>
                  <h4>Name: {r.name}</h4>
                  <h5>Email: {r.email}</h5>
                  <button onClick={() => handleUser(r._id)}>Remove User</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
