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
                <div className="text-center">
                    <h1 className="text-2xl text-gray-800 text-center  my-auto sen font-bold mt-10">Madison Location</h1>
                    <hr className="mx-28 rounded border-2 border-orange-300 mb-5"/>
                    <h1 className="text-xl text-gray-800 text-left ml-10 my-auto sen"> 719 Hilldale Way, Madison, WI 53705</h1>
                    <h1 className="text-2xl text-gray-800 text-left ml-10 my-auto sen font-bold mt-3">Hours</h1>
                    <h1 className="text-xl text-gray-800 text-left ml-10 my-auto sen">MON-SAT 7am - 8pm</h1>
                    <h1 className="text-xl text-gray-800 text-left ml-10 my-auto sen">SUNDAY 7am - 6pm</h1>
                    <h1 className="text-xl text-gray-800 text-left ml-10 my-auto sen mt-5">Full coffee + espresso menu.</h1>
                    <button className="py-3 px-5 sen bg-orange-300">GET DIRECTIONS</button>
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