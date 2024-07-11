import "./../App.css";
// import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import barista from "./../Images/hero.avif"
import coffee from "./../Images/coffee.avif"
import main from "./../Images/main.avif"

const Hero = () => {
    return (
        <div className="">
            <Navbar className=""/>
            <img src={main} alt="pic of the place" className="brightness-50 w-full object-cover"/>
            <div className="grid grid-cols-2 ">
                <div className="">
                    <img src={barista} alt="barista" className="w-full h-96 object-cover"/>
                </div>
                <div>
                    <h1 className="text-3xl text-gray-800 text-center  my-auto sen">Welcome to the best cafe</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
                <div>
                    <h1 className="text-3xl text-gray-800 text-center  my-auto sen">Welcome to the best cafe</h1>
                </div>
                <div className="">
                    <img src={coffee} alt="coffee" className="w-full object-cover"/>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Hero;