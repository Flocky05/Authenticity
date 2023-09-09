
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <nav className='flex justify-between bg-fuchsia-900 text-white p-5 text-xl'>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div className='grid grid-cols-3 w-2/4 '>
                <Link to="/blog" >Blog</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/register">Register</Link>
            </div>
        </nav>
    );
};

export default Header;