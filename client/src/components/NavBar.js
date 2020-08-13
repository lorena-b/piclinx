import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <div className="nav-wrapper blue">
                <Link to="/" className="brand-logo left">Piclinx</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;