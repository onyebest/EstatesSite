import React from "react";
import "./Residency2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../../assets/abj11.jpg";
import Image2 from "../../../../assets/abj10.jpg";
import Image3 from "../../../../assets/abj9.jpg";
import Image4 from "../../../../assets/abj8.jpg";
import Image5 from "../../../../assets/abj7.jpg";
import Image6 from "../../../../assets/abj6.jpg";
import Image7 from "../../../../assets/abj5.jpg";

const Residency2 = () => {
  const settings = {
    infinite: true, // Infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Auto-play slides
    autoplaySpeed: 2000, // Auto-play interval in milliseconds
  };

  const slideStyle = {
    margin: "200px", // Add margins as needed
    padding: "200px", // Add padding as needed
  };

  return (
    <div className='residency__container'>
      <div className='container__content'>
        <div className='top__text'>
          <h4>Best Choices</h4>
          <h2>Popular Residencies</h2>
        </div>

        <Slider {...settings} className='slide'>
          <div className='slider__content' style={slideStyle}>
            <img src={Image1} alt='' />
            <h4>
              <span>₦</span>350,000,000
            </h4>
            <h5>Open-Concept Living</h5>
            <h6>
              Experience the airy and open-concept living space, perfect for
              hosting gatherings and fostering a sense of togetherness.
            </h6>
          </div>

          <div className='slider__content'>
            <img src={Image2} alt='' />
            <h4>
              <span>₦</span>500,000,000
            </h4>
            <h5>Charming Garden</h5>
            <h6>
              This house boasts a charming garden filled with colorful blooms,
              creating a picturesque entrance.
            </h6>
          </div>

          <div className='slider__content'>
            <img src={Image3} alt='' />
            <h4>
              <span>₦</span>200,000,000
            </h4>
            <h5>Modern Kitchen</h5>
            <h6>
              Inside, a modern kitchen with sleek design and high-end appliances
              awaits culinary adventures
            </h6>
          </div>

          <div className='slider__content'>
            <img src={Image4} alt='' />
            <h4>
              <span>₦</span>234,000,500
            </h4>
            <h5>Inviting Fireplace</h5>
            <h6>
              The living room features an inviting fireplace, perfect for cozy
              gatherings.
            </h6>
          </div>

          <div className='slider__content'>
            <img src={Image5} alt='' />
            <h4>
              <span>₦</span>238,304,928
            </h4>
            <h5>Scenic Balcony</h5>
            <h6>
              Enjoy stunning sunsets from the scenic balcony that overlooks the
              peaceful neighborhood.
            </h6>
          </div>

          <div className='slider__content'>
            <img src={Image6} alt='' />
            <h4>
              <span>₦</span>938,829,000
            </h4>
            <h5>Luxurious Bedroom</h5>
            <h6>
              The master bedroom exudes luxury with its spacious layout and
              elegant decor.
            </h6>
          </div>

          <div className='slider__content'>
            <img src={Image7} alt='' />
            <h4>
              <span>₦</span>230,900,000
            </h4>
            <h5>Hidden Oasis</h5>
            <h6>
              The backyard hides a tranquil oasis, complete with a serene pond
              and lush greenery for ultimate relaxation.
            </h6>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Residency2;
