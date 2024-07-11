// import React from "react";
import "./../App.css";
// import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex justify-between mx-10 2xl:mx-96 mt-10 p-5 text-4xl font-bold bg-transparent absolute w-full z-50">
            <div className="">
                <h1 className=" text-gray-200 text-shadow sen">Whistle & Brew Café</h1>
            </div>
            <div className="text-white text-shadow sen ">
                <p className="inline mr-20 ">Main</p>
                <p className="inline mr-20">Coffee</p>
                <p className="inline mr-20">Expresso</p>
                <p className="inline mr-20">Tea</p>
                <p className="inline mr-20">Bakery</p>
            </div>

        </div> 
    )
};

export default Navbar;
