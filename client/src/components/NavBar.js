import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Logo from "../logo.js"
import { UserContext } from '../App'

const NavBar = () => {

    const { state, dispatch } = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if (state) {
            return [
                <li><Link to="/profile">Profile</Link></li>,
                <li><Link to="/createpost">Create Post</Link></li>,
                <li><Link to="/feed">Feed</Link></li>,
                <li>
                    <button className="btn waves-effect waves-light #90caf9 #1e88e5 blue darken-1"
                        onClick={() => {
                            localStorage.clear()
                            dispatch({type:"CLEAR"})
                            history.push('/login')
                        }}>
                            Logout
                    </button>
                </li >
            ]
        } else {
    return [
        <li><Link to="/login">Login</Link></li>,
        <li><Link to="/signup">Sign Up</Link></li>
    ]

}

    }
return (
    <nav>
        <div className="nav-wrapper white">
            <Link to={state ? "/" : "/login"} className="brand-logo left"><Logo /></Link>
            <ul id="nav-mobile" className="right">
                {renderList()}
            </ul>
        </div>
    </nav>
);

}

export default NavBar;