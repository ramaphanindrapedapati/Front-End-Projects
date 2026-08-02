import "./CommonCss/Reservation.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TimePicker from "../../components/TimePicker/TimePicker";
import PageTransition from "../../components/PageTransition";

const Reservation = () => {
    const navigate = useNavigate();
const handleReservation = (e) => {

    e.preventDefault();

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        alert("⚠ Please login to reserve a table.");

        navigate("/login");

        return;
    }

    alert("🎉 Table Reserved Successfully!");

    // Later we'll call the Spring Boot Reservation API here.
};
    const [date, setDate] = useState(new Date());

    return (

        <>
<PageTransition>
            <Navbar />

            {/* ================= HERO ================= */}

            <section className="reservation-hero">

                <div className="reservation-overlay">

                    <h1>Reserve Your Table</h1>

                    <p>
                        Experience unforgettable dining moments at Spice Haven.
                        Book your table today for a premium culinary experience.
                    </p>

                </div>

            </section>

            {/* ================= RESERVATION ================= */}

            <section className="reservation-section">

                {/* Left */}

                <div className="reservation-calendar">

                    <h2>Select Date</h2>

                    <Calendar
    onChange={setDate}
    value={date}
    minDate={new Date()}
    showNeighboringMonth={true}
/>

<TimePicker />

                </div>

                {/* Right */}

                <div className="reservation-form">

                    <h2>Book A Table</h2>
 
                  <form onSubmit={handleReservation}>
                        <div className="reservation-row">

                            <input
                                type="text"
                                placeholder="Full Name"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                            />

                        </div>

                        <div className="reservation-row">

                            <input
                                type="tel"
                                placeholder="Phone Number"
                            />

                            <input
                                type="number"
                                placeholder="Guests"
                                min="1"
                            />

                        </div>

                        <div className="reservation-row">

                        </div>

                        <textarea

                            rows="6"

                            placeholder="Special Request"

                        ></textarea>

                        <button
                            type="submit"
                            className="reservation-btn"
                        >

                            Reserve Now

                        </button>

                    </form>

                </div>

            </section>

            {/* ================= LOCATION ================= */}

            <section className="reservation-location">

                <div className="reservation-info">

                    <h2>Visit Spice Haven</h2>

                    <p>

                        📍 Banjara Hills, Hyderabad

                    </p>

                    <p>

                        📞 +91 98765 43210

                    </p>

                    <p>

                        ✉ spicehaven@gmail.com

                    </p>

                    <p>

                        🕒 Mon - Sun : 10 AM - 11 PM

                    </p>

                </div>

                <div className="reservation-map">

                    <iframe

                        title="Hyderabad"

                        src="https://www.google.com/maps?q=Banjara+Hills+Hyderabad&output=embed"

                        loading="lazy"

                    ></iframe>

                </div>

            </section>

            <Footer />
</PageTransition>
        </>

    );

};

export default Reservation;