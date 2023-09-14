import { Link } from "react-router-dom";
import img from "../../assets/images/home/home.avif"
import Products from "../Products/Products";
const Home = () => {
    return (
        <div>
            <div className="relative">
                <img className="w-full h-screen" src={img} alt="" />
                <div className="text-white absolute -mt-80 text-center">
                    <h3 className="text-4xl font-bold p-4 ">Authenticity</h3>
                    <p className="px-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam eveniet animi non a? Consequatur aliquam voluptatem quo nulla necessitatibus officiis voluptatum praesentium sint. Dignissimos distinctio unde ipsam fuga ratione asperiores!</p>
                    <Link className="bg-blue-400 px-3 py-1 rounded text-white">Learn more</Link>
                </div>
            </div>
            <Products></Products>
        </div>
    );
};

export default Home;