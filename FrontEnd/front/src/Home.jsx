import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <div class="container text-center" data-aos="slide-down">
        <div class="row">
          <div class="col">
            <h1 className="heading">Category</h1>
          </div>
        </div>
      </div>
      <br />
      <div class="container-fluid text-center homeDiv">
        <div class="row">
          <div class="col-sm" data-aos="slide-right">
            <div>
              <a href="/men">
                <img
                  className="img1"
                  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/11353956/2020/2/12/9c48b7b7-a6f6-4620-8e9f-d000ba3016a11581497225150-Louis-Philippe-Men-Suits-4981581497221685-1.jpg"
                  alt=""
                />
              </a>

              <h1>Men's Suits</h1>
            </div>
          </div>
          <div class="col-sm" data-aos="slide-left">
            <div>
              <a href="/women">
                <img
                  className="img1"
                  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13914324/2022/11/21/4a176b7f-1e66-4b24-9186-fed346c8d3241669011620973-plusS-Green-Polka-Dots-Printed-A-Line-Dress-1371669011620347-1.jpg"
                  alt=""
                />
              </a>

              <h1>Women's Dress</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container text-center" data-aos="slide-down">
        <div class="row">
          <div class="col">
            <h1 className="heading">New Trend</h1>
          </div>
        </div>
      </div>
      <br />
      <div class="container-fluid text-center homeDiv">
        <div class="row">
          <div class="col-sm" data-aos="slide-up">
            <div>
              <a href="/tshirt">
                {" "}
                <img
                  className="img1"
                  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/14790090/2021/8/31/6db74ba1-8ae5-4698-8ffd-946023446b7e1630394167962-ADIDAS-Men-Tshirts-4931630394167453-1.jpg"
                  alt=""
                />
              </a>

              <h1>T-shirt</h1>
            </div>
          </div>
          <div class="col-sm" data-aos="slide-up">
            <div>
              <a href="/kids">
                <img
                  className="img1"
                  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2021/1/6/d9124672-650c-47d8-8b58-eccf2830156d1609918728916-1.jpg"
                  alt=""
                />
              </a>

              <h1>Kids</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="container text-center" data-aos="slide-down">
        <div class="row">
          <div class="col">
            <h1 className="heading">Accessories</h1>
          </div>
        </div>
      </div>
      <br />
      <div class="container-fluid text-center homeDiv">
        <div class="row">
          <div class="col-sm" data-aos="slide-up">
            <div>
              <a href="/glasses">
                <img
                  className="img1"
                  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/20378388/2022/10/12/52f4ec74-e473-4b68-ac6a-91b9c1e6c8151665597326578Frames1.jpg"
                  alt=""
                />
              </a>

              <h1>Glasses</h1>
            </div>
          </div>
          <div class="col-sm" data-aos="slide-up">
            <div>
              <a href="/watch">
                <img
                  className="img1"
                  src="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/16934964/2022/1/25/3a498e2e-7250-4e5e-aa33-1876b6d813741643102245729SmartWatches1.jpg"
                  alt=""
                />
              </a>

              <h1>Smart-Watch</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
