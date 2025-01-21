import "../styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Duration of the animation
      once: true, // Only once
    });
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section id="home" className="home">
        <div className="home-text" data-aos="fade-up">
          <h1>
            <span className="line-one">Rusinga Agriculture</span>
            <br />
            <span className="line-two">Network</span>
          </h1>
          <p>
            Empowering sustainable farming practices with modern technology and
            community-based solutions.
          </p>
          <Link to="/about" className="cta-btn" data-aos="fade-down">
            Learn More
          </Link>
        </div>
      </section>

      {/* Scroll to Section */}
      <section className="section-details" data-aos="fade-up">
        <div className="section-content">
          <h2>Our Mission</h2>
          <p>
            We aim to improve local farming systems through education,
            innovation, and the provision of resources to farmers in Rusinga
            Island.
          </p>
        </div>
      </section>

      <section className="section-services" data-aos="fade-left">
        <div className="service-item">
          <h3>Livestock Farming</h3>
          <p>
            Sustainable practices for pig and poultry farming, ensuring growth
            and profitability.
          </p>
        </div>
        <div className="service-item">
          <h3>Agriculture Training</h3>
          <p>
            Offering hands-on training to local farmers, with an emphasis on
            new technologies and sustainable practices.
          </p>
        </div>
        <div className="service-item">
          <h3>Community Development</h3>
          <p>
            Empowering the local community by providing resources, knowledge,
            and funding opportunities for agriculture.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
