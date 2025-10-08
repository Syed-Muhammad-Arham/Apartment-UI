import logo from "./logo.svg";
import "./App.css";

import tasveer from "./images/1.jpeg";

function App() {
  return (
    <div className="main">
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>Landing</li>
          <li>About</li>
          <li>Team</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="hero">
        <div className="bg-img">
          <div className="hero-text">
            <h1>Easy Way to Find a Perfect Property</h1>
          </div>
          <div className="hero-input">
            <input type="text" placeholder="Enter a valid Email address" />
            <button>Submit</button>
          </div>
        </div>
      </div>
      <section className="circle-images">
        <div className="box">
          <div className="bg-img1"></div>
          <h2>Paris</h2>
          <p>10 Property</p>
        </div>
        <div className="box">
          <div className="bg-img2"></div>

          <h2>Newyork</h2>
          <p>40 Property</p>
        </div>
        <div className="box">
          <div className="bg-img3"></div>

          <h2>Los Angles</h2>
          <p>34 Property</p>
        </div>
      </section>
      <h1 className="properties">Properties For Rent</h1>
      <section className="card">
        <div className="boxs box1">
          <div className="shadow">
            <h1>$ 250</h1>
            <p>Sample text click to select</p>
          </div>
        </div>
        <div className="boxs box2">
          <div className="shadow">
            <h1> $ 250</h1>
            <p>Sample text click to select</p>
          </div>
        </div>
        <div className="boxs box3">
          <div className="shadow">
            <h1>$ 250</h1>
            <p>Sample text click to select</p>
          </div>
        </div>
        <div className="boxs box4">
          <div className="shadow">
            <h1>$ 250</h1>
            <p>Sample text click to select</p>
          </div>
        </div>
        <div className="boxs box5">
          <div className="shadow">
            <h1>$ 250</h1>
            <p>Sample text click to select</p>
          </div>
        </div>
        <div className="boxs box6">
          <div className="shadow">
            <h1>$ 250</h1>
            <p>Sample text click to select</p>
          </div>
        </div>
      </section>
      <section className="both">
        <div className="left">
          <div className="text-heading">
            <h1>Let’s Find The Right Selling Option</h1>
          </div>
          <div className="icon-box">
            <div className="icon">
              <img src={tasveer} />{" "}
            </div>
            <div className="text">
              <h3 style={{ fontSize: "22px" }}>Property Management</h3>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                Sample text. Click to select the Text Element.
              </p>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon">
              <img src={tasveer} />{" "}
            </div>
            <div className="text">
              <h3 style={{ fontSize: "22px" }}>Mortgage Services</h3>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                Sample text. Click to select the Text Element.
              </p>
            </div>
          </div>
          <div className="icon-box">
            <div className="icon">
              {" "}
              <img src={tasveer} />{" "}
            </div>
            <div className="text">
              <h3 style={{ fontSize: "22px" }}>Currency Services</h3>
              <p style={{ fontSize: "18px", textAlign: "left" }}>
                Sample text. Click to select the Text Element.
              </p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </section>
      <section className="section">
        <div className="box">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            20k
          </h1>
          <h2>Award Winning</h2>
        </div>
        <div className="box">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            14k
          </h1>
          <h2>Property Ready</h2>
        </div>
        <div className="box">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
            }}
          >
            2m
          </h1>
          <h2>Happy Customer</h2>
        </div>
      </section>
      <h1 className="properties">Explore Apartment Types</h1>
      <section className="card">
        <div className="box ">
          <div className="box7"></div>
          <h1>Office</h1>
        </div>
        <div className="box ">
          <div className="box8"></div>
          <h1>House</h1>
        </div>
        <div className="box ">
          <div className="box9"></div>
          <h1>Appartments</h1>
        </div>
      </section>
      <section className="both">
        <div className="right right1"></div>
        <div className="left">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginLeft: "10px",
              marginTop: "100px",
            }}
          >
            Trusted By Best Exclusive Agents
          </h1>

          <ul
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginLeft: "20px",
              marginTop: "50px",
            }}
          >
            <li>Find excellent deals</li>
          </ul>

          <ul
            style={{
              fontSize: "1.4rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginLeft: "20px",
              marginTop: "50px",
            }}
          >
            <li>Friendly host & Fast support</li>
          </ul>

          <ul
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              marginLeft: "20px",
              marginTop: "50px",
            }}
          >
            <li>List your own property</li>
          </ul>
        </div>
      </section>
      <section className="company">
        <div className="c-box ">
          <div className="img1"></div>
        </div>
        <div className="c-box ">
          <div className="img2"></div>
        </div>
        <div className="c-box ">
          <div className="img3"></div>
        </div>
        <div className="c-box ">
          <div className="img4"></div>
        </div>
      </section>
      <section className="both">
        <div className="right right2"></div>
        <div className="left">
          <div className="comma"></div>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "left",
              marginLeft: "40px",
              marginTop: "10px",
            }}
          >
            Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan
            sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit
            amet nisl. Enim nunc
          </p>
          <h2
            style={{
              fontSize: "1.4rem",
              textAlign: "left",
              marginLeft: "40px",
              marginTop: "10px",
            }}
          >
            Celia Almeda
          </h2>
          <div className="comma"></div>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "left",
              marginLeft: "40px",
              marginTop: "10px",
            }}
          >
            Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan
            sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit
            amet nisl.{" "}
          </p>
          <h2
            style={{
              fontSize: "1.4rem",
              textAlign: "left",
              marginLeft: "40px",
              marginTop: "10px",
            }}
          >
            Frank Kinney
          </h2>
        </div>
      </section>
      <section className="footer">
        <h1
          style={{
            fontSize: "3rem",
            textAlign: "left",
            // marginLeft: "40px",
            // marginTop: "10px",
          }}
        >
          Get Your Dream House
        </h1>
        <br></br>
        <span
          style={{
            fontSize: "1.3rem",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "10px",
          }}
        >
          Name
        </span>
        <input
          type="text"
          placeholder="Enter Your Name"
          style={{
            fontSize: "1.2rem",
            width: "350px",
            textAlign: "left",
            marginLeft: "10px",
            marginTop: "10px",
            border: "none",
            padding: "10px 10px",
            borderRadius: "40px",
          }}
        />
        <span
          style={{
            fontSize: "1.3rem",
            textAlign: "left",
            marginLeft: "40px",
            marginTop: "10px",
          }}
        >
          Email
        </span>
        <input
          type="text"
          placeholder="Enter a valid email address"
          style={{
            fontSize: "1.2rem",
            width: "350px",
            textAlign: "left",
            marginLeft: "10px",
            marginTop: "10px",
            border: "none",
            padding: "10px 10px",
            borderRadius: "40px",
          }}
        ></input>
        <button
          style={{
            fontSize: "1.2rem",
            width: "120px",
            backgroundColor: "black",
            color: "white",
            textAlign: "center",
            marginLeft: "10px",
            marginTop: "10px",
            border: "none",
            padding: "10px 10px",
            borderRadius: "40px",
          }}
        >
          Submit
        </button>
      </section>

      <footer>
        <div class="box23">
          <ul>
            <li>
              <a href="">FAQ</a>
            </li>
            <li>
              <a href="">Investor Relations</a>
            </li>
            <li>
              <a href="">Privacy Test</a>
            </li>
            <li>
              <a href="">Speed Test</a>
            </li>
          </ul>
        </div>
        <div class="box23">
          <ul>
            <li>
              <a href="">Help Center</a>
            </li>
            <li>
              <a href="">Jobs</a>
            </li>
            <li>
              <a href="">Cookies Prefrences</a>
            </li>
            <li>
              <a href="">Legal Notices</a>
            </li>
          </ul>
        </div>
        <div class="box23">
          <ul>
            <li>
              <a href="">Account</a>
            </li>
            <li>
              <a href="">Ways to Watch</a>
            </li>
            <li>
              <a href="">Coprate Information</a>
            </li>
            <li>
              <a href="">Only on Netflix</a>
            </li>
          </ul>
        </div>
        <div class="box23">
          <ul>
            <li>
              <a href="">Media Center</a>
            </li>
            <li>
              <a href="">Term of Use</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
