import "./../App.css";
// import { Link } from "react-router-dom";
// import Footer from './Footer';
// import Navbar from './Navbar';
import barista from "./../Images/hero.avif"
import main from "./../Images/main.avif"

const Hero = () => {
    return (
        <div className="">
            <img src={main} alt="pic of the place" className="brightness-50"/>
            <div className="grid grid-cols-2 ">
                <div className="">
                    <img src={barista} alt="" />
                </div>
                <div>
                    <h1 className="text-3xl text-gray-800 text-center  my-auto">Welcome to the best cafe</h1>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
};

export default Hero;