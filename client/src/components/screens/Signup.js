import React from 'react';
import Logo from "../../logo.js"
import {Link, useHistory} from "react-router-dom"
import M from 'materialize-css'

const Signup = () => {

    const history = useHistory()
    const [name,setName] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")

    const PostData = ()=> {
        // if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))) {
        //     M.toast({html: 'Invalid Email', classes:"#e57373 red lighten-2"})
        // }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            if (data.error) {
                M.toast({html: data.error, classes:"#e57373 red lighten-2"})
            } else {
                M.toast({html: data.message, classes:"#81c784 green lighten-2"})
                history.push('/login')
            }
        }) 
    }

    return (
        <div className="mycard">

            <div className="card auth-card">
                <Logo />
                <input
                    type="text"
                    placeholder="Name"
                    value = {name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value = {email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Password"
                    value = {password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #90caf9 #1e88e5 blue darken-1"
                onClick={()=>PostData()}>
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