import "./CommonCss/Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaPaperPlane
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

const Contact = () => {
  return (
    <>
<PageTransition>
      <Navbar />

      {/* Hero Section */}

      <section className="contact-hero">

        <div className="contact-overlay">

          <span className="contact-tag">
            GET IN TOUCH
          </span>

          <h1>CONTACT US</h1>

          <p>
            We'd love to hear from you.
            Reach out for reservations,
            inquiries or special requests.
          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="contact-section">

        {/* Left */}

        <div className="contact-info">

          <h2>CONTACT INFORMATION</h2>

          <div className="info-card">

            <FaMapMarkerAlt />

            <div>

              <h4>Address</h4>

              <p>
                123 Gourmet Street
                <br />
                New York, NY 10001
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaPhoneAlt />

            <div>

              <h4>Phone</h4>

              <p>
                +1 (212) 555-1234
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaEnvelope />

            <div>

              <h4>Email</h4>

              <p>
                info@luxora.com
              </p>

            </div>

          </div>

          <div className="info-card">

            <FaClock />

            <div>

              <h4>Opening Hours</h4>

              <p>
                Mon - Sun
                <br />
                10:00 AM - 11:00 PM
              </p>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="contact-form">

          <h2>SEND US A MESSAGE</h2>

          <form>

            <div className="row">

              <input
                type="text"
                placeholder="Your Name"
              />

              <input
                type="email"
                placeholder="Your Email"
              />

            </div>

            <input
              type="text"
              placeholder="Subject"
            />

            <textarea
              rows="8"
              placeholder="Your Message"
            ></textarea>

            <button>

              SEND MESSAGE

              <FaPaperPlane />

            </button>

          </form>

        </div>

      </section>

      <Footer />
</PageTransition>
    </>
  );
};

export default Contact;