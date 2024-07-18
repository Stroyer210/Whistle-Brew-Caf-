import "./../App.css";
// import { Link } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';
import main from "./../Images/main.avif"

const Tea = () => {
    return (
        <div className="">
            <Navbar className=""/>
            <img src={main} alt="pic of the place" className="brightness-50 w-full h-screen object-cover z-10"/>
            <h1 className="col-start-2 text-6xl z-50 top-1/2 mineRight absolute text-white text-shadow sen">hello Tea</h1>
            <Footer />
        </div>
    )
};

export default Tea;