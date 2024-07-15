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
            <img src={main} alt="pic of the place" className="brightness-50 w-full h-screen object-cover"/>
            <div className="grid grid-cols-2 ">
                <div className="">
                    <img src={barista} alt="barista" className="w-full h-full object-cover"/>
                </div>
                <div className="text-center 2xl:my-10">
                    <h1 className="text-3xl text-gray-800 text-center my-auto sen font-bold mt-10 2xl:mt-14">THE LATEST</h1>
                    <hr className="mx-28 xl:mx-60 rounded border-2 border-orange-300 md:mb-5 2xl:mb-14 xl:mt-2"/>
                    <h1 className="text-xl text-gray-800 text-center 2xl:ml-20 my-auto sen"> CHECK OUR MENU • </h1>
                    <button className="py-3 px-5 sen bg-orange-300 xl:text-xl md:mt-5">Menu</button>
                    <h1 className="text-xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen mt-10">COFFEE + ESPRESSO CATERING • </h1>
                    <h1 className="text-xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen">Now booking 2024!</h1>
                    <h1 className="text-xl text-orange-400 text-center  my-auto sen md:mt-2 xl:mt-8 2xl:mb-12 underline">Learn More</h1>
                </div>
            </div>
            <div className="grid grid-cols-2 ">
                <div className="text-center xl:my-10">
                    <h1 className="text-3xl text-gray-800 text-center  my-auto sen font-bold mt-10 xl:mt-14">Madison Location</h1>
                    <hr className="mx-28 xl:mx-60 rounded border-2 border-orange-300 md:mb-5 xl:mb-14 xl:mt-2"/>
                    <h1 className="text-xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen"> 719 Hilldale Way, Madison, WI 53705</h1>
                    <h1 className="text-2xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen font-bold md:mt-3 xl:mt-8">Hours</h1>
                    <h1 className="text-xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen">MON-SAT 7am - 8pm</h1>
                    <h1 className="text-xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen">SUNDAY 7am - 6pm</h1>
                    <h1 className="text-xl text-gray-800 text-left md:ml-10 xl:ml-20 my-auto sen md:mt-2 xl:mt-8 xl:mb-12">Full coffee + espresso menu.</h1>
                    <button className="py-3 px-5 sen bg-orange-300 xl:text-xl md:my-3">GET DIRECTIONS</button>
                </div>
                <div className="">
                    <img src={coffee} alt="coffee" className="w-full h-full object-cover"/>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Hero;