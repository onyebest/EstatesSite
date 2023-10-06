import React from "react";
import "./Contact2.css";
import { AiTwotonePhone } from "react-icons/ai";
import { FaFacebookF, FaFacebookMessenger } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";
import Image1 from "../../../../assets/contact.jpg";

const Contact2 = () => {
  return (
    <div className='contact__container'>
      <div className='container__content'>
        <div className='content__1'>
          <div className='top__text'>
            <h4>Our Contact</h4>
            <h5>Easy to Contact us</h5>
            <h6>
              We always ready to help by providing the best service <br />{" "}
              believe a good place to live can make your life better
            </h6>
          </div>

          <div className='contact__template'>
            <div className='template'>
              <div className='inner'>
                <AiTwotonePhone className='icon' />
                <h3>
                  Call <br /> <span>1234567890</span>
                </h3>
              </div>
              <Link>Call Now</Link>
            </div>
            <div className='template'>
              <div className='inner'>
                <FaFacebookF className='icon' />
                <h3>
                  Facebook <br /> <span>Send Meassge</span>
                </h3>
              </div>
              <Link>Call Now</Link>
            </div>
            <div className='template'>
              <div className='inner'>
                <FaFacebookMessenger className='icon' />
                <h3>
                  Massage <br /> <span>Massage Sam's</span>
                </h3>
              </div>
              <Link>Call Now</Link>
            </div>
            <div className='template'>
              <div className='inner'>
                <BiLogoGmail className='icon' />
                <h3>
                  Email <br /> <span>Send Email</span>
                </h3>
              </div>
              <Link>Call Now</Link>
            </div>
          </div>
        </div>

        {/* content 2 starts here */}
        <div className='content__2'>
          <div className='img__container'>
            <img src={Image1} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
