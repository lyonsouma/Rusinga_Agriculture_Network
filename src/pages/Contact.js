import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      {/* Contact Form Section */}
      <section className="contact-form py-5">
        <div className="container"  style={{marginTop:'112px'}}>
          <h3>Send Us a Message</h3>
          <form action="#" method="POST">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                id="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number (Optional)</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Your Phone Number"
              />
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
          <p className="mt-3">
            Thank you for contacting us. We will respond within 24 hours!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
