import "./Footer.css";



import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaLinkedinIn,
    FaWhatsapp,
    FaXTwitter,
    FaLocationDot,
    FaPhone,
    FaEnvelope,
    FaClock
} from "react-icons/fa6";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="row gy-4">

                    {/* Logo Section */}

                    <div className="col-lg-4 col-md-6 footer-column">

                        {/* <img
                            src={logo}
                            alt="Spice Haven"
                            className="footer-logo-img"
                        /> */}

                        <h2 className="footer-logo">
                            Spice Haven
                        </h2>

                        <p className="footer-text">
                            Experience premium dining with authentic flavours,
                            fresh ingredients and exceptional hospitality.
                            Every meal is crafted with love and served with care.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-lg-4 col-md-6 footer-column">

                        <h4 className="footer-title">
                            Quick Links
                        </h4>

                        <ul className="footer-links">

                            <li>Home</li>

                            <li>Menu</li>

                            <li>Reservation</li>

                            <li>About Us</li>

                            <li>Contact Us</li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-lg-4 col-md-12 footer-column">

                        <h4 className="footer-title">
                            Contact Us
                        </h4>

                        <p>
                            <FaLocationDot className="icon" />
                            Visakhapatnam, Andhra Pradesh
                        </p>

                        <p>
                            <FaPhone className="icon" />
                            +91 7989229964
                        </p>

                        <p>
                            <FaEnvelope className="icon" />
                            info@spicehaven.com
                        </p>

                        <p>
                            <FaClock className="icon" />
                            Open Daily : 10:00 AM - 11:00 PM
                        </p>

                    </div>

                </div>

                <div className="footer-divider"></div>

                {/* Newsletter */}

                <div className="newsletter">

                    <h4>
                        Subscribe To Our Newsletter
                    </h4>

                    <div className="newsletter-box">

                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <button>
                            Subscribe
                        </button>

                    </div>

                </div>

                <div className="footer-divider"></div>

                {/* Social */}

                <div className="social-icons">

                    <FaFacebookF />

                    <FaInstagram />

                    <FaYoutube />

                    <FaLinkedinIn />

                    <FaWhatsapp />

                    <FaXTwitter />

                </div>

                <p className="copyright">
                    © 2026 Spice Haven Restaurant. All Rights Reserved.
                </p>

            </div>

        </footer>

    );

}

export default Footer;