import React, {useContext, useState} from 'react';
import Logo from "../../logo.js"
import {Link, useHistory} from "react-router-dom"
import {UserContext} from '../../App'
import M from 'materialize-css'

const Login = () => {

    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")

    const PostData = ()=> {
        if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
            M.toast({html: 'Invalid Email', classes:"#e57373 red lighten-2"})
            return 
        }
        fetch("/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.error) {
                M.toast({html: data.error, classes:"#e57373 red lighten-2"})
            } else {
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                dispatch({type:"USER", payload:data.user})
                M.toast({html: "Login Successful", classes:"#81c784 green lighten-2"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        }) 
    }


    return (
        <div className="mycard">

            <div className="card auth-card">
                <Logo />
                <input
                    type="text"
                    placeholder="Email"
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #90caf9 #1e88e5 blue darken-1"
                onClick={()=>PostData()}>
                    Login
                </button>
                <h5>
                    <Link to="/signup">Don't have an account?</Link>
                </h5>

            </div>
        </div>
    )



}

export default Login; 