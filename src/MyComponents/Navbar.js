import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <h3>AI Lawyer</h3>
            </div>
            <div className="main-menu">
                <Link to="/">Home</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/requirements">Requirements</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/signup">SignUp</Link>
            </div>
        </div>
    )
}

export default Navbar