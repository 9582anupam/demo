import "./home.css";
// import Hero from "./components/Hero";
import Earth from "./components/Earth";
import Navbar from "../temp/Navbar";
import Hero from "../temp/Hero";
import Features from "../temp/Features";
import About from "../temp/About";
import Footer from "../temp/Footer";

const Home = () => {
    return (
        <div className="">
            {/* <Navbar/> */}
            <Earth/>
            <Hero />
            <About/>
            <Features/>
            <Footer/>
        </div>
    );
};

export default Home;
