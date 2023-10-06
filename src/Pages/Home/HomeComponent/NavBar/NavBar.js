import { Link } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import "./NavBar.css";

 

const NavBar = () => {
  
  return (
    <div className='nav__container'>
      <div className='container__content'>
        <div className='nav'>
          <div className='logo'>
            <Link to={"/"}>samHomzy</Link>
            <div className='orange__circle'></div>
          </div>
          <ul className='list__content'>
            <li>
              <Link to={"/residency"}>Residencies</Link>
            </li>
            <li>
              <Link to={"/ourvalue"}>Our Value</Link>
            </li>
            <li>
              <Link to={"/contactus"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/getstarted"}>Get Started</Link>
            </li>
            <li>
              <a href='/' className='contact'>
                Contact
              </a>
            </li>
          </ul>

          <div className='menu'>
            <BiMenuAltRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
