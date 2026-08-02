import "./CommonCss/Login.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import {
    FaEnvelope,
    FaLock,
    FaEye,
    FaEyeSlash
} from "react-icons/fa";
import PageTransition from "../../components/PageTransition";

const Login = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [loginData, setLoginData] = useState({

        email: "",

        password: ""

    });

    const handleChange = (e) => {

        setLoginData({

            ...loginData,

            [e.target.name]: e.target.value

        });

    };

const handleSubmit = (e) => {

    e.preventDefault();


    const savedUser = JSON.parse(
        localStorage.getItem("user")
    );


    if (!savedUser) {

        alert("No account found. Please register first ❌");
        return;

    }


    if (
        savedUser.email === loginData.email &&
        savedUser.password === loginData.password
    ) {

        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        localStorage.setItem(
            "userEmail",
            savedUser.email
        );


        alert("Login Successful ✅");

        navigate("/");

    }

    else {

        alert("Invalid Email or Password ❌");

    }

};

const logout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    navigate("/login");

};


    return (

        <>
<PageTransition>
            <Navbar />

            <section className="login-page">

                <div className="login-overlay">

                    <div className="login-card">

                        <span className="login-subtitle">

                            Welcome Back

                        </span>

                        <h1>

                            Login To Spice Haven

                        </h1>

                        <p>

                            Sign in to reserve tables, order delicious meals,
                            and enjoy a premium dining experience.

                        </p>

                        <form onSubmit={handleSubmit}>

                            {/* Email */}

                            <div className="login-input-box">

                                <FaEnvelope />

                                <input

                                    type="email"

                                    name="email"

                                    placeholder="Enter Email"

                                    value={loginData.email}

                                    onChange={handleChange}

                                    required

                                />

                            </div>

                            {/* Password */}

                            <div className="login-input-box">

                                <FaLock />

                                <input

                                    type={showPassword ? "text" : "password"}

                                    name="password"

                                    placeholder="Enter Password"

                                    value={loginData.password}

                                    onChange={handleChange}

                                    required

                                />

                                <span

                                    className="login-eye"

                                    onClick={() =>

                                        setShowPassword(!showPassword)

                                    }

                                >

                                    {

                                        showPassword

                                            ?

                                            <FaEyeSlash />

                                            :

                                            <FaEye />

                                    }

                                </span>

                            </div>

                            <div className="login-options">

                                <label>

                                    <input type="checkbox" />

                                    Remember Me

                                </label>

                                <Link to="#">

                                    Forgot Password?

                                </Link>

                            </div>

                            <button

                                className="login-btn"

                            >

                                LOGIN

                            </button>

                        </form>

                        <div className="login-register">

                            Don't have an account?

                            <Link to="/register">

                                Register

                            </Link>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />
</PageTransition>
        </>

    );

};

export default Login;