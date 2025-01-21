import years from "../assets/icons/calendar.png";
import Eggs from "../assets/icons/egg.png";
import "../styles/About.css";
import mission from "../assets/icons/target.png";
import Vision from "../assets/icons/vision.png";
import ChickeIcon from "../assets/icons/chicken.png";
import Sustainability from "../assets/icons/planting.png";
import Community from "../assets/icons/solidarity.png";
import Lyons from "../assets/images/IT1.png";
import David from "../assets/images/David.png";

import Quality from "../assets/icons/service.png";

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="about" data-aos="fade-up" >
        <h5  style={{marginTop:'112px'}}>Empowering farmers</h5>
        <h2>Innovative agriculture solutions</h2>
        <p>
          Rusinga Agriculture Network thrives in Nairobi, KE, specializing in
          raising high-quality pigs and chickens. Our commitment to sustainable
          farming practices ensures that we deliver nutritious livestock while
          nurturing the environment. As we expand into diverse agricultural
          ventures, we aim to empower local farmers by sharing knowledge,
          resources, and innovative solutions that transform their farming
          experience. Join us in cultivating a thriving agricultural community
          that supports growth and sustainability.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section" data-aos="fade-right">
        <img src={Vision} alt="Vision Icon" className="vision-icon" />
        <h3>Our Vision</h3>
        <p>
          To create a sustainable, community-centered farm that supports local
          food security and inspires responsible agricultural practices.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section" data-aos="fade-left">
        <img src={mission} alt="Mission Icon" className="mission-icon" />
        <h3>Our Mission</h3>
        <p>
          Every day, we strive to maintain quality care for our animals, use
          sustainable practices, and contribute to our community by producing
          high-quality eggs.
        </p>
      </section>

      {/* Values or Principles Section */}
      <section className="values-section">
        <div className="values-content">
          <div className="value-item" data-aos="zoom-in">
            <img
              src={Sustainability}
              alt="Sustainability"
              className="value-icon"
            />
            <h4>Sustainability</h4>
            <p>
              We prioritize eco-friendly practices and resource conservation to
              ensure a lasting impact on the environment.
            </p>
          </div>
          <div className="value-item" data-aos="zoom-in" data-aos-delay="200">
            <img src={Quality} alt="Quality" className="value-icon" />
            <h4>Quality</h4>
            <p>
              We are committed to delivering the highest quality products and
              services through attention to detail and care.
            </p>
          </div>
          <div className="value-item" data-aos="zoom-in" data-aos-delay="400">
            <img
              src={Community}
              alt="Community Support"
              className="value-icon"
            />
            <h4>Community Support</h4>
            <p>
              Our farm is dedicated to strengthening the local community by
              providing jobs, education, and fresh produce.
            </p>
          </div>
          <div className="value-item" data-aos="zoom-in" data-aos-delay="600">
            <img src={Quality} alt="Innovation" className="value-icon" />
            <h4>Innovation</h4>
            <p>
              We embrace modern techniques and technologies to improve
              productivity and meet evolving customer needs.
            </p>
          </div>
        </div>
      </section>

      {/* Farm Highlights/Accomplishments Section */}
      <section className="highlights-section">
        <div className="highlight-item" data-aos="flip-left">
          <img src={ChickeIcon} alt="Birds" className="highlight-icon" />
          <h4>300 Birds</h4>
          <p>We currently care for 300 healthy birds on our farm.</p>
        </div>
        <div
          className="highlight-item"
          data-aos="flip-left"
          data-aos-delay="200"
        >
          <img src={years} alt="Years" className="highlight-icon" />
          <h4>5 Years in Business</h4>
          <p>
            Our farm has been operating for over 5 years, delivering fresh,
            local eggs.
          </p>
        </div>
        <div
          className="highlight-item"
          data-aos="flip-left"
          data-aos-delay="400"
        >
          <img src={Eggs} alt="Eggs" className="highlight-icon" />
          <h4>5000+ Eggs Produced</h4>
          <p>We've produced over 5000 eggs since our establishment.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section text-center">
        <div className="team-content">
          <div className="team-member" data-aos="fade-up">
            <img src={Lyons} alt="Lyons" className="team-photo" />
            <h4>Lyons</h4>
            <h6>Farm Manager, overseeing daily operations.</h6>
          </div>
          <div className="team-member" data-aos="fade-up" data-aos-delay="200">
            <img src={David} alt="David" className="team-photo" />
            <h4>David Kiwago</h4>
            <h6>Animal Care Specialist, ensuring the health of our birds.</h6>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
