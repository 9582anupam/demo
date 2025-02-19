import { Link } from "react-router-dom";
// import axiosInstance from "../../services/users/axiosInstance";
// import refreshAccessToken from "../../services/users/refreshAccessToken";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import userAuthenticatedAxiosInstance from "../../services/users/userAuthenticatedAxiosInstance";

const Header = ({ setIsSidebarActive, isSidebarActive, headerRef }) => {
    const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
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
            navigate("/");
            console.log("User logged out unsuccessfully");
        }
    };

    return (
        <div className="bg-[#74B83E] h-20 flex items-center justify-between gap-4 px-8 w-full">
            {/* Logo */}
            <div>
                LOGO
            </div>



            <div className="flex gap-4 items-center">
                <Link to={isUserLoggedIn ? "#" : "/login"} className="" onClick={isUserLoggedIn ? handleLogout : null}>
                    <div className="bg-white text-black rounded-md px-4 py-2 flex justify-center items-center cursor-pointer">
                        <p>
                            {isUserLoggedIn ? "Logout" : "Login"}
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
