import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate, Link } from "react-router-dom"; // Added Link import
import '../CssPage/HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/movies");
  };

  return (
    <div className="homepage-container">
      <Carousel controls={true} indicators={true} interval={3000} className="mb-5">
        <Carousel.Item>
          <div className="carousel-item-custom" style={{ backgroundImage: "url('/images/img1.jpg')" }}>
            <h1 className="carousel-text">Welcome to PopcornBox</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-custom" style={{ backgroundImage: "url('/images/img2.jpg')" }}>
            <h1 className="carousel-text">Discover Your Favorite Movies</h1>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-item-custom" style={{ backgroundImage: "url('/images/img3.jpg')" }}>
            <h1 className="carousel-text">Enjoy Unlimited Entertainment</h1>
          </div>
        </Carousel.Item>
      </Carousel>

      <div className="homepage-explore">
        <p className="explore-text">
          Discover a wide collection of the best movies. Explore now to find out what's trending!
        </p>
        <div className="text-center mt-4">
          <Link to="/movies">
            <button className="explore-btn">
              Explore Movies
            </button>
          </Link>
        </div>
      </div>

      <footer className="homepage-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h5>About Us</h5>
              <p>PopcornBox is your go-to platform for streaming the best movies online.</p>
            </div>
            <div className="col-md-4">
              <h5>Contact Us</h5>
              <p>Email: sadek.mandhouj04@gmail.com</p>
              <p>Phone: +216 52231427 </p>
            </div>
            <div className="col-md-4">
              <h5>Follow Us</h5>
              <p>Stay connected via social media.</p>
              <p>
                <a href="#" className="text-light">Facebook</a> |
                <a href="#" className="text-light"> Instagram</a> |
                <a href="#" className="text-light"> LinkedIn</a>
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <p>&copy; 2024 PopcornBox. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
