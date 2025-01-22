import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(""); // To track form submission status

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    // Using EmailJS to send the email
    emailjs
      .sendForm(
        "service_rtexpd8", // Replace with your EmailJS service ID
        "template_mjv3ubb", // Replace with your EmailJS template ID
        form,
        "qoNrvf9-jVqziMlqO" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormStatus("Message sent! We will respond within 24 hours.");
          form.reset();
        },
        (error) => {
          console.log(error.text);
          setFormStatus("There was an error sending your message. Please try again.");
        }
      );
  };

  return (
    <div>
      {/* Contact Form Section */}
      <section className="contact-form py-5">
        <div className="container" style={{ marginTop: "112px" }}>
          <h3>Send Us a Message</h3>
          <form onSubmit={handleSubmit} method="POST">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="from_name"
                  name="from_name" // Ensure the name attribute matches your template
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
                  name="from_email" // Ensure the name attribute matches your template
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
                name="message" // Ensure the name attribute matches your template
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
                name="phone" // Ensure the name attribute matches your template
                placeholder="Your Phone Number"
              />
            </div>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
          {formStatus && <p className="mt-3">{formStatus}</p>} {/* Display status message */}
        </div>
      </section>
    </div>
  );
};

export default Contact;
