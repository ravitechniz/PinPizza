import React , { useState, useEffect }from 'react'
import banner from '../img/pexels-chanwalrus-958545.jpg';
import logo from '../img/restaurant-logo-4B7844CB05-seeklogo.com.png';
import category1 from '../img/istockphoto-1269099250-612x612.jpg';
import category2 from '../img/istockphoto-510482834-612x612.jpg';
import category3 from '../img/2548301_QFSHe_646_0_0_0_0_0-2000-cea7272becb34c6d873d7c3befb8e98d.jpg';
import category4 from '../img/pexels-raudys-808941.jpg';
import category5 from '../img/istockphoto-655123574-612x612.jpg';
import info from '../logo.svg';
import videoInfo from '../img/3195394-uhd_3840_2160_25fps.mp4';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
// import orderDeliveryBannerImage from '../img/pexels-chanwalrus-958545.jpg';
import '../ContentStyles.css'; // Import your CSS file
// import '../AboutStyles.css';
// import '../orderDeliverySection.css';
const Content = () => {
  const images = [
    { src: category1, label: 'starters' },
    { src: category2, label: 'sandwiches' },
    { src: category3, label: 'mains' },
    { src: category4, label: 'desserts' },
    { src: category5, label: 'colddrink' }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState(3); // default to 3

  useEffect(() => {
    const updateVisibleImages = () => {
      if (window.innerWidth <= 480) {
        setVisibleImages(1);
      } else if (window.innerWidth <= 768) {
        setVisibleImages(2);
      } else {
        setVisibleImages(3); 
      }
    };

    updateVisibleImages(); // Initial check
    window.addEventListener('resize', updateVisibleImages);
    return () => window.removeEventListener('resize', updateVisibleImages);
  }, []);

  const nextSlide = () => {
    if (currentIndex < images.length - visibleImages) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const isNextDisabled = currentIndex >= images.length - visibleImages;
  const isPrevDisabled = currentIndex <= 0;
  return (
    <>
    <section className="headerBannerSection"> 
      <div className="bannerImage banner">
        <img src={banner} alt="Banner" className="bannerImg banner-image" /> 
        <img src={logo} className="Applogo logo-image" alt="logo" />
      </div>
    </section>
    <section className="categorySection_s">
      <div className="categoryImage_s">
        <img src={category1} alt="Category 1" />
        <span>starters</span>
      </div>
      <div className="categoryImage_s">
        <img src={category2} alt="Category 2" />
        <span>sandwiches</span>
      </div>
      <div className="categoryImage_s">
        <img src={category3} alt="Category 3" />
        <span>mains</span>
      </div>
      <div className="categoryImage_s">
        <img src={category4} alt="Category 4" />
        <span>desserts</span>
      </div>
      <div className="categoryImage_s">
        <img src={category5} alt="Category 5" />
        <span>colddrink</span>
      </div>
    </section>
    <section className="container categorySection">
       
      <button
        className="sliderButton prevButton"
        onClick={prevSlide}
        disabled={isPrevDisabled}
      >
        Prev
      </button>

      <div className="sliderWrapper">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleImages)}%)` }}
        >
          {images.map((image, index) => (
            <div className="categoryImage" key={index}>
              <img src={image.src} alt={`Category ${index + 1}`} />
              <span>{image.label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        className="sliderButton nextButton"
        onClick={nextSlide}
        disabled={isNextDisabled}
      >
        Next
      </button> 
      <button className="orderNow">Order Now</button>
    </section>

    {/* <section className="aboutSection">
      <div className="leftPart">
        <img src={banner} alt="aboutBanner" className="aboutbannerImg aboutbanner-image" />
      </div>
      <div className="rightPart">
        <h2>Our Restaurant</h2>
        <h3>ABOUT</h3>
        <hr></hr>
        <div className="hours">
          <h4 className='hoursName'>HOURS</h4>
          <ul>
            <li><b>Monday</b> - 12pm - 9pm</li>
            <li><b>Tuesday</b> - 12pm - 9pm</li>
            <li><b>Wednesday</b> - 12pm - 10pm</li>
            <li><b>Thursday</b> - 12pm - 10pm</li>
            <li><b>Friday</b> - 12pm - 10pm</li>
            <li><b>Saturday</b> - 12pm - 10pm</li>
            <li><b>Sunday</b> - 12pm - 10pm</li>
          </ul>
        </div>
        <div className="contact">
          <h4 className='contactPhone'>PHONE</h4>
          <p>212.260.1212</p>
          <p>212.260.7049</p>
        </div>
      </div>
    </section>

    <section className="orderDeliverySection">
      <div className="leftPart">
        <h2>ORDER</h2>
        <h3>Pick-up & Delivery</h3>
        <hr></hr>
        <h4>CONTACTLESS TAKE-OUT</h4>
        <p>To place an order for pickup, please order via Square.</p>
        <button className="orderButton">ORDER PICKUP</button>
        <h4>DELIVERY EXPANDED</h4>
        <p>To place an order for delivery, please choose from one of our partners below:</p>
        <ul className="deliveryPartners">
          <li>Postmates</li>
          <li>GrubHub</li>
          <li>Seamless</li>
          <li>UberEats</li>
        </ul>
      </div>
      <div className="rightPart">
        <img src={orderDeliveryBannerImage} alt="Delivery" className="deliveryImage" />
      </div>
    </section>  */}

    <div className="mainContainer">
      <section className="aboutSection">
        <div className=""></div>
        <div className="leftPart">
          <h2>Our Restaurant</h2>
          <h3>ABOUT</h3>
          <hr />
          <div className="hours">
            <h4 className="hoursName">HOURS</h4>
            <ul className="hoursDay">
              <li><b>Monday</b> - 12pm - 9pm</li>
              <li><b>Tuesday</b> - 12pm - 9pm</li>
              <li><b>Wednesday</b> - 12pm - 10pm</li>
              <li><b>Thursday</b> - 12pm - 10pm</li>
              <li><b>Friday</b> - 12pm - 10pm</li>
              <li><b>Saturday</b> - 12pm - 10pm</li>
              <li><b>Sunday</b> - 12pm - 10pm</li>
            </ul>
          </div>
          <div className="contact">
            <h4 className="contactPhone">PHONE</h4>
            <p>212.260.1212</p>
            <p>212.260.7049</p>
          </div>
          <button className="btn aboutButton">ABOUT US</button>
        </div>
      </section>
      <section className="orderDeliverySection">
        <div className="rightPart">
          <h2>ORDER</h2>
          <h3>Pick-up & Delivery</h3>
          <hr />
          <h4>CONTACTLESS TAKE-OUT</h4>
          <p>To place an order for pickup, please order via Square.</p>
          <button className="btn orderButton  mb-3 ">ORDER PICKUP</button>
          <h4>DELIVERY EXPANDED</h4>
          <p>To place an order for delivery, please choose from one of our partners below:</p>
          <ul className="deliveryPartners">
            <li>Postmates</li>
            <li>GrubHub</li>
            <li>Seamless</li>
            <li>UberEats</li>
          </ul>
        </div>
        <div className=""></div>    
      </section>
    </div>

    <section className="infoSection container-fluid py-5">
      <div className="row">
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="infoBox ">
            <img src={info} className="Appinfo info-image" alt="info" />
            <h3>"It surpassed all my expectations!"</h3>
            <p>The food looks like it has been prepared for a culinary magazine. While in New York City add Red Bamboo as a culinary experience. It will be a good place to take a date to or get together with some friends. You will not be disappointed.</p>
            <h1 className='dubbleComma'>&ldquo;</h1>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="infoBox ">
            <img src={info} className="Appinfo info-image" alt="info" />
            <h3>"Best vegetarian restaurant... EVER"</h3>
            <p>I absolutely love this place. The Wings are the best things ever!!! I've been a veggie for 22 years now and never had wings, Philly Cheese steak etc so to get all this as a veggie option is fantastic! I go to this place every time I'm in New York :)</p>
            <h1 className='dubbleComma'>&ldquo;</h1>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="infoBox ">
            <img src={info} className="Appinfo info-image" alt="info" />
            <h3>"Delicious food, good prices"</h3>
            <p>Very nice, cozy place. Service was good, food delicious and so much to choose from :) Wanna go there again :) </p>
            <span>Pros: Good price, Good food, Cozy place and nice staff</span>
            <h1 className='dubbleComma'>&ldquo;</h1>
          </div>
        </div>
      </div>
    </section>

    <div className="connectMainContainer">
      <section className="connectSection">
        <h4>connect with us</h4>
        <div className='connectIcon'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
        </div>
      </section>
    </div>

    <section className="videoSection">
      <div className="videoContainer">
        <iframe
          className="videoContent"
          src={videoInfo}
          title="Video Title"           
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="testimonials">
        <h4>Testimonials</h4>
        <p>We love...</p>
        <blockquote>
          "I love their Chicken Parmesan. It tastes just like chicken but itʼs all soy!"
        </blockquote>
        <p className="author">- Janet Jackson</p>
        <button className="morePressButton">More Press</button>
      </div>
    </section>
    <div className="footerBannerSection">
      <section className="footerSection">
        <span className='footerTitleOne'>
        <i>ECLECTIC VEGAN CUISINE</i>
        </span>
        <br></br>
        <span className='footerTitleTwo'>SOY DELICIOUS</span>
      </section>
    </div>

    <footer className="footer">
      <div className="footerContainer">
        {/* Logo and Description */}
        <div className="footerSection footerLogo">
          <img src={logo} className="footerApplogo footer_logo-image" alt="logo" />
          <p>Connecting communities through delicious food and service.</p>
        </div>

        {/* Navigation Links */}
        <div className="footerSection footerLinks">
          <h4>Quick Links</h4>
          <ul className="menulist">
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </div>

        {/* Contact and Social Icons */}
        <div className="footerSection footerSocial">
          <h4>Connect with Us</h4>
          <div className="socialIcons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
          </div>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@yourrestaurant.com</p>
        </div>
      </div>
      <div className="footerCopyright">
        <p>&copy; 2024 Your Restaurant. All Rights Reserved.</p>
      </div>
    </footer>

  </>
  );
}

export default Content
