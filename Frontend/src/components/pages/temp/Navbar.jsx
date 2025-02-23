import React, { useState, useContext } from 'react';
import { Menu, X, Brain, User, LogOut, ChevronDown } from 'lucide-react';
import { UserContext } from '../../../context/UserContext';
import { useNavigate } from "react-router-dom";
import userAuthenticatedAxiosInstance from '../../../services/users/userAuthenticatedAxiosInstance';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext); // Use context for authentication state
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            const response = await userAuthenticatedAxiosInstance.post("/logout");
            console.log(response);
            console.log("User logged out successfully");
        } catch (error) {
            console.error("An error occurred", error.message);
        } finally {
            localStorage.removeItem("accessToken");
            setIsUserLoggedIn(false); // Update login state
            navigate("/"); // Redirect after logout
        }
    };

    return (
        <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
            <div className="mx-auto px-8 py-1">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Brain className="h-8 w-8 text-purple-500" />
                        <span className="ml-2 text-xl font-bold">GenAI Challenge</span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <a href="#features" className="hover:text-purple-400 transition-colors">Features</a>
                            <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
                            {!isUserLoggedIn ? (
                                <button 
                                    className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors"
                                    onClick={() => navigate("/login")}
                                >
                                    Register Now
                                </button>
                            ) : (
                                <div className="relative">
                                    <button 
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="flex items-center space-x-2 hover:text-purple-400 transition-colors"
                                    >
                                        <User className="h-5 w-5" />
                                        <span>Profile</span>
                                        <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* Profile Dropdown */}
                                    {isDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-1 z-50">
                                            <a 
                                                href="#profile" 
                                                className="px-4 py-2 text-sm hover:bg-gray-700 flex items-center"
                                                onClick={() => setIsDropdownOpen(false)}
                                            >
                                                <User className="h-4 w-4 mr-2" />
                                                Profile
                                            </a>
                                            <button 
                                                onClick={handleLogout}
                                                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700 flex items-center text-red-400"
                                            >
                                                <LogOut className="h-4 w-4 mr-2" />
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#features" className="block px-3 py-2 hover:bg-purple-600 rounded-md">Features</a>
                        <a href="#about" className="block px-3 py-2 hover:bg-purple-600 rounded-md">About</a>
                        {!isUserLoggedIn ? (
                            <button 
                                className="w-full text-left px-3 py-2 bg-purple-600 hover:bg-purple-700 rounded-md"
                                onClick={() => navigate("/login")}
                            >
                                Register Now
                            </button>
                        ) : (
                            <>
                                <a 
                                    href="#profile" 
                                    className="px-3 py-2 hover:bg-purple-600 rounded-md flex items-center"
                                >
                                    <User className="h-4 w-4 mr-2" />
                                    Profile
                                </a>
                                <button 
                                    onClick={handleLogout}
                                    className="w-full text-left px-3 py-2 hover:bg-purple-600 rounded-md flex items-center text-red-400"
                                >
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
