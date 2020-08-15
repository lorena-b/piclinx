import React from 'react';
import Logo from "../../logo.js"
import {Link} from "react-router-dom"

const Signup = () => {

    return (
        <div className="mycard">

            <div className="card auth-card">
                <Logo />
                <input
                    type="text"
                    placeholder="Name"
                />
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
                <button className="btn waves-effect waves-light #90caf9 #1e88e5 blue darken-1">
                    Sign Up
                </button>
                <h5>
                    <Link to="/login">Already have an account?</Link>
                </h5>



            </div>
        </div>
    )



}

export default Signup; 