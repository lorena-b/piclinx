import React from 'react';
import Logo from "../../logo.js"

const Login = () => {

    return (
        <div className="mycard">

            <div className="card auth-card">
                <Logo />
                <input
                    type="text"
                    placeholder="Email"
                />
                <input
                    type="text"
                    placeholder="Password"
                />
                <button className="btn waves-effect waves-light">
                    Login
                </button>



            </div>
        </div>
    )



}

export default Login; 