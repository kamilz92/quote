import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>
                IT Quotes
            </span>
            <nav>
                <Link to="/">
                    Home
                </Link>
                <Link to="/create">
                    Add Quote
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;