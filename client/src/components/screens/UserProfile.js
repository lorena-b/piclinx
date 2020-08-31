import React,{useEffect, useState, useContext} from 'react';
import {UserContext} from '../../App'
import {useParams} from 'react-router-dom'

const Profile = () => {
    const [userProfile,setProfile] = useState(null)
    const {state,dispatch} = useContext(UserContext)
    const {userid} = useParams()

    useEffect(()=>{
        fetch(`/user/${userid}`, {
            headers:{
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            setProfile(result)
        })
    },[])

    return (
        <>
        {userProfile ? 
        
        <div style={{maxWidth:"550px", margin:"0px auto"}}>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
                margin: "18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"
                        alt="profileimg" />
                </div>

                <div>
                    <h4>{userProfile.user.name}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width:"108%" }}>
                        <h5>{userProfile.posts.length} Posts</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>
                    </div>
                </div>

            </div>

            <div className="gallery">
                {
                    userProfile.posts.map(item=>{
                        return (
                            <img key={item._id} className="item" alt={item.title} src={item.photo}/>
                        )
                    })
                }
               
            </div>
        </div>
        
        : <h2>Loading...</h2>}
        
        </>
    )

}

export default Profile; 