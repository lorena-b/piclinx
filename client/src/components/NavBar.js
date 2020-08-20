import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import Logo from "../logo.js"
import {UserContext} from '../App'

const NavBar = () => {
    const {state, dispatch} = useContext(UserContext)
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/create">Create Post</Link></li>
            ]
        } else {
            return  [
                <li><Link to="/login">Login</Link></li>,
                <li><Link to="/signup">Sign Up</Link></li>
            ]

        }

    }
    return (
        <nav>
            <div className="nav-wrapper white">
                <Link to="/" className="brand-logo left"><Logo /></Link>
                <ul id="nav-mobile" className="right">
                    {renderList()}
                </ul>
            </div>
        </nav>
    );

}

export default NavBar;