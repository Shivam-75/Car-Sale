import { AiFillFacebook } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../css/fotter.css";
const Fotter = () => {
  return (
    <footer className="footer">
      <div className="containerg">
        <div className="row">
          <div className="footer-col">
            <h4>Rolex</h4>
            <ul>
              <li>
                <NavLink to="/" className="a">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Service" className="a">
                  Service
                </NavLink>
              </li>
              <li>
                <NavLink to="/Sales" className="a">
                  Sales
                </NavLink>
              </li>
              <li>
                <NavLink to="/Book" className="a">
                  Book
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <NavLink to="" className="a">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a">
                  Help Center
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a">
                  Security Tips
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a">
                  {" "}
                  Term & condition
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a">
                  privacy policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact us</h4>
            <ul>
              <li>
                <NavLink to="" className="a">
                  Email : Shivam@6386000621@gmail.com
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a">
                  phone: 6386222621
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a">
                  Address : Banglor
                </NavLink>
              </li>
              <li>
                <NavLink to="" className="a"></NavLink>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <NavLink to="" className="a">
                <i className="fab fa-facebook-f">
                  <AiFillFacebook />
                </i>
              </NavLink>
              <NavLink to="" className="a">
                <i className="fab fa-twitter">
                  <FaTwitter />
                </i>
              </NavLink>
              <NavLink to="" className="a">
                <i className="fab fa-instagram">
                  <AiFillInstagram />
                </i>
              </NavLink>
              <NavLink to="" className="a">
                <i className="fab fa-linkedin-in">
                  <FaLinkedinIn />
                </i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Fotter;
