import years from "../assets/icons/fireworks.png";
import FoodSecurity from "../assets/icons/food-safety.png";
import "../styles/About.css";
import mission from "../assets/icons/target.png";
import Vision from "../assets/icons/vision.png";
import CropLivestock from "../assets/icons/CropLivestock.png";
import Sustainability from "../assets/icons/planting.png";
import Community from "../assets/icons/solidarity.png";
import Quality from "../assets/icons/Quality.png";
import Innovation from "../assets/icons/Innovation.png"

const About = () => {
  return (
    <div>
      {/* About Section */}
      <section id="about" className="about" data-aos="fade-up">
        <h5 style={{ marginTop: "112px" }}>
          Transforming Lives Through Agriculture
        </h5>
        <h2>Sustainable Agriculture, Stronger Communities</h2>
        <p>
          Rusinga Agriculture Network, located in Rusinga, Homa Bay County, is
          dedicated to improving livelihoods through sustainable agriculture,
          climate resilience, and social empowerment. Our organization focuses
          on enhancing food security, increasing economic opportunities, and
          promoting climate-smart agricultural practices. We specialize in
          poultry and livestock farming, environmental conservation, and
          providing training and support to vulnerable groups, including women
          and youth. Our initiatives are designed to empower local farmers with
          the tools and knowledge needed to increase productivity, access
          markets, and create lasting economic stability. We welcome donors and
          partners to join us in our mission to build a thriving,
          self-sufficient agricultural community that fosters growth,
          innovation, and inclusivity. Together, we can cultivate a future where
          sustainable farming transforms lives.
        </p>
      </section>

      {/* Vision Section */}
      <section className="vision-section" data-aos="fade-right">
        <img src={Vision} alt="Vision Icon" className="vision-icon" />
        <h3>Our Vision</h3>
        <p>
          To be a leading force in sustainable agriculture, fostering food
          security, economic empowerment, and environmental stewardship for
          future generations.
        </p>
      </section>

      {/* Mission Section */}
      <section className="mission-section" data-aos="fade-left">
        <img src={mission} alt="Mission Icon" className="mission-icon" />
        <h3>Our Mission</h3>
        <p>
          To empower communities by providing sustainable agricultural
          solutions, fostering economic resilience, and championing
          climate-smart practices that improve lives and protect the
          environment.
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
              We are committed to eco-friendly agricultural practices that
              preserve natural resources and ensure long-term environmental
              health.
            </p>
          </div>
          <div className="value-item" data-aos="zoom-in" data-aos-delay="200">
            <img src={Quality} alt="Quality" className="value-icon" />
            <h4>Quality</h4>
            <p>
              We strive to provide the highest quality agricultural products and
              services that meet the needs of our community and stakeholders.
            </p>
          </div>
          <div className="value-item" data-aos="zoom-in" data-aos-delay="400">
            <img
              src={Community}
              alt="Community Support"
              className="value-icon"
            />
            <h4>Community Engagement</h4>
            <p>
              Our initiatives focus on strengthening local communities through
              education, training, and economic opportunities.
            </p>
          </div>
          <div className="value-item" data-aos="zoom-in" data-aos-delay="600">
            <img src={Innovation} alt="Innovation" className="value-icon" />
            <h4>Innovation</h4>
            <p>
              We leverage modern agricultural technologies to enhance
              productivity and address the evolving challenges of food security.
            </p>
          </div>
        </div>
      </section>

      {/* Farm Highlights/Accomplishments Section */}
      <section className="highlights-section">
        <div className="highlight-item" data-aos="flip-left">
          <img src={CropLivestock} alt="Agriculture" className="highlight-icon" />
          <h4>Diverse Agricultural Activities</h4>
          <p>
            Engaged in crop farming, livestock rearing, and climate-smart
            agricultural practices.
          </p>
        </div>
        <div
          className="highlight-item"
          data-aos="flip-left"
          data-aos-delay="200"
        >
          <img src={years} alt="Years" className="highlight-icon" />
          <h4>2+ Years of Agricultural Excellence</h4>
          <p>
            Over 2 years of empowering communities through sustainable
            agriculture and food security initiatives.
          </p>
        </div>
        <div
          className="highlight-item"
          data-aos="flip-left"
          data-aos-delay="400"
        >
          <img src={FoodSecurity} alt="Production" className="highlight-icon" />
          <h4>Impacting Food Security</h4>
          <p>
            Our programs have contributed to increased agricultural
            productivity, benefiting countless households.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
