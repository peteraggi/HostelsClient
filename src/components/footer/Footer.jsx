import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { validateEmail } from "../../utils/data/validate";
import FormsApi from "../../api/api";
function Footer() {
  const { enqueueSnackbar } = useSnackbar();
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState({
    email:"",
  });

  const newsletterHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (data.email === "" || data.email === null) {
      enqueueSnackbar("email field is empty", {variant: "warning",});
    }else if(!validateEmail(data.email)){
      enqueueSnackbar("Enter correct email format", {variant: "error",});
    }
    else{
      let api = new FormsApi();
      let res = await api.post("/new/subscriber", data);
      if (res.status === true) {
        enqueueSnackbar("Your Email has been added successfully", {variant: "success",});
        setSubmit(true);
        setData({
          email:"",
        })
      }
      else if(res.status === false){
        enqueueSnackbar("An error occured", {variant: "warning",});
        setSubmit(false);
      }else{
        enqueueSnackbar("Some other error occured", {variant: "warning",});
        setSubmit(false);
      }

    }
  };
  return (
    <>
      <footer>
        <div className="ftr_container top">
          <div className="subscribe" id="contact">
            <h2>Subscribe to Our newsletter</h2>
            <p>This will help us connected with you in case of any query</p>
            <form onSubmit={newsletterHandler}>
            <div className="input flex flex-cl">
              <input
               name="email"
               placeholder="Enter Your Email address"
               value={data.email}
               onChange={(e) =>
                 setData({ ...data, email: e.target.value })
               }
              />
              <button
               className="flex1 ---btn-1"
               type="submit">
                <span>Subscribe</span>
              </button>
            </div>
            </form>

          </div>

          <div className="content grid  top">
            <div className="box">
              <div className="__logo">
                <h1 style={{ color: "orange" }}>Beacon Hostels</h1>
              </div>
              <p>
                 Beacon Hostels is an Online hostel management System
                that Provides acess to all hostels and rental surrounding Lira University that provides booking preferences
                and an E-walet for saving and payment of rent fares
                with  instant notifications after every booking or transaction made with the system.
              </p>
              <div class="social flex">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>

            <div className="box">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link
                    to="/"
                    style={{ color:"white" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/aboutus"
                    style={{ color:"white" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help/request"
                    style={{ color: "white" }}
                  >
                    How to book
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/help/request"
                    style={{ color: "white" }}
                  >
                    Describe Hostel
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/help/request"
                    style={{ color: "white" }}
                  >
                    Make comments
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/aboutus"
                    style={{ color: "white" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="box">
              <h2>Services</h2>
              <ul>
                <li>
                  <i class="fas fa-angle-double-right"></i>Savings
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Mobile money pay
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Hostels
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Discounts
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Events
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>recommended hostels
                </li>
              </ul>
            </div>

            <div className="box">
              <h2>Address</h2>
              <div className="icon flex">
                <div className="i">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>Lira Uganda</p>
                </div>
              </div>
              <div className="icon flex">
                <div className="i">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>+256762677787</p>
                </div>
              </div>
              <div className="icon flex">
                <div className="i">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>beaconhostel@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
