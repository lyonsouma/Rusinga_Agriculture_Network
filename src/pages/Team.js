import Lyons from "../assets/images/Lyonss.jpg";
import Lamas from "../assets/icons/lamas.png";
import David from "../assets/images/David.png";
import Faith from "../assets/images/FAy.png";
import Lizia from "../assets/images/Liz.png";
import "../styles/Team.css";

const Team = () => {
  return (
    <div>
      {/* OUR TEAM */}
      <section className="team-section text-center py-5" id="team">
        <div className="container" style={{ marginTop: "112px" }}>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Dedicated professionals ensuring the success of Rusinga Agriculture
            Network.
          </p>
          <div className="row">
            {/* Team Member 1 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="team-card" data-aos="zoom-in" data-aos-duration="1000">
                <img
                  src={Lyons}
                  alt="Lyons Ouma, Executive Director of Rusinga Agriculture Network"
                  className="team-photo img-fluid rounded-circle"
                />
                <h4 className="team-name mt-3">Lyons Ouma</h4>
                <p className="team-role">Executive Director</p>
                <p className="team-description">
                  Provides overall leadership, strategic direction, and ensures the organization's vision and mission are achieved.
                </p>
                <div className="team-social-links">
                  <a href="https://linkedin.com/in/lyonsouma" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="https://twitter.com/lyonsouma" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="team-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="200">
                <img
                  src={David}
                  alt="David Kiwago, Operations Manager"
                  className="team-photo img-fluid rounded-circle"
                />
                <h4 className="team-name mt-3">David Kiwago</h4>
                <p className="team-role">Operations Manager</p>
                <p className="team-description">
                  Oversees daily operations, resource allocation, and ensures smooth execution of agricultural projects.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="team-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                <img
                  src={Lamas}
                  alt="Lamas Akinyi, Finance Manager"
                  className="team-photo img-fluid rounded-circle"
                />
                <h4 className="team-name mt-3">Lamas Akinyi</h4>
                <p className="team-role">Finance Manager</p>
                <p className="team-description">
                  Manages financial planning, budgeting, and ensures compliance with financial regulations and reporting.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="team-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="600">
                <img
                  src={Lizia}
                  alt="Lizia Abiga, Programs Coordinator"
                  className="team-photo img-fluid rounded-circle"
                />
                <h4 className="team-name mt-3">Lizia Abiga</h4>
                <p className="team-role">Programs Coordinator</p>
                <p className="team-description">
                  Designs, implements, and evaluates agricultural programs to align with community needs and organizational goals.
                </p>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="team-card" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="800">
                <img
                  src={Faith}
                  alt="Faith Andang'o, Communications and Public Relations Officer"
                  className="team-photo img-fluid rounded-circle"
                />
                <h4 className="team-name mt-3">Faith Andang'o</h4>
                <p className="team-role">Communications and Public Relations Officer</p>
                <p className="team-description">
                  Handles public relations, stakeholder engagement, branding, and community outreach.
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-Action Section */}
          <div className="text-center mt-5">
            <p>Interested in joining our team or collaborating with us?</p>
            <a href="/contact" className="btn btn-primary">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
