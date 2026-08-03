import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageTransition from "../../components/PageTransition";

import "./CustomerCss/OrderSuccess.css";

function OrderSuccess() {

    return (

        <PageTransition>

            <Navbar />

            <section className="order-success">

                <div className="success-card">

                    <div className="success-icon">

                        ✓

                    </div>

                    <h1>

                        Payment Successful

                    </h1>

                    <p>

                        Thank you for choosing
                        <strong> Spice Haven Restaurant.</strong>

                    </p>

                    <p>

                        Your order has been placed successfully.

                    </p>

                    <div className="order-details">

                        <p>

                            Estimated Delivery

                        </p>

                        <h3>

                            30 - 45 Minutes

                        </h3>

                    </div>

                    <div className="success-buttons">

                        <Link
                            to="/menu"
                            className="btn-menu"
                        >

                            Order More

                        </Link>

                        <Link
                            to="/home"
                            className="btn-home"
                        >

                            Back to Home

                        </Link>

                    </div>

                </div>

            </section>

            <Footer />

        </PageTransition>

    );

}

export default OrderSuccess;