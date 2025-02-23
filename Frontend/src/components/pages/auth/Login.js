import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [generalError, setGeneralError] = useState("");
    // const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { setIsUserLoggedIn } = useContext(UserContext);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // setIsSubmitted(true);
        setEmailError("");
        setGeneralError("");
        setError("");

        if (!email) {
            setEmailError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }

        try {
            const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
            const response = await axios.post(
                `${BACKEND_URL}/api/v1/users/login`,
                { email, password },
                { withCredentials: true }
            );
            console.log("res", response);
            const data = response.data;
            if (data.success) {
                console.log("User logged in successfully", data.user.accessToken);
                localStorage.setItem("accessToken", data.user.accessToken);
                setIsUserLoggedIn(true); // Update login state
                navigate("/");
            } else {
                setGeneralError(data.message);
                console.log(data.message);
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="min-h-screen -mt-32 bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
                    <button 
                        onClick={() => navigate("/")}
                        className="absolute left-6 top-6 p-2 text-gray-400 hover:text-purple-400 transition-colors"
                    >
                        <svg 
                            className="h-6 w-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    
                    <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <div className="relative">
                                <svg 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full bg-gray-900/50 border ${emailError ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
                                />
                            </div>
                            {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                        </div>

                        <div>
                            <div className="relative">
                                <svg 
                                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`w-full bg-gray-900/50 border ${error ? 'border-red-500' : 'border-gray-600'} rounded-lg py-3 px-10 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500`}
                                />
                            </div>
                            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
                        </div>

                        {generalError && (
                            <p className="text-center text-red-500 text-sm">{generalError}</p>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02]"
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className="w-full bg-gray-900/50 border border-gray-600 hover:border-purple-500 text-white font-semibold py-3 rounded-lg transition-colors"
                        >
                            Login with Google
                        </button>

                        <p className="text-center text-gray-400">
                            Don't have an account?{' '}
                            <Link 
                                to="/signup" 
                                className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;