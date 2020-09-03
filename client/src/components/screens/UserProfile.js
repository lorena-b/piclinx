import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [userProfile, setProfile] = useState(null)
    const { state, dispatch } = useContext(UserContext)
    const { userid } = useParams()

    useEffect(() => {
        fetch(`/user/${userid}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => {
                console.log(result)
                setProfile(result)
            })
    }, [])

    const followUser = () => {
        fetch('/follow', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")

            },
            body: JSON.stringify({
                followId: userid
            })
        }).then(res => res.json())
            .then(data => {
                dispatch({ type: "UPDATE", payload: { following: data.following, followers: data.followers } })
                localStorage.setItem("user", JSON.stringify(data))
                setProfile((prevState) => {
                    return {
                        ...prevState,
                        user: data
                    }

                })
            })
    }

    return (
        <>
            {userProfile ?

                <div style={{ maxWidth: "550px", margin: "0px auto" }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "18px 0px",
                        borderBottom: "1px solid grey"
                    }}>
                        <div>
                            <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"
                                alt="profileimg" />
                        </div>

                        <div>
                            <h4>{userProfile.user.name}</h4>
                            <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                                <h5>{userProfile.posts.length} Posts</h5>
                                <h5>{userProfile.user.followers.length} Followers</h5>
                                <h5>{userProfile.user.following.length} Following</h5>
                            </div>
                            <button className="btn waves-effect waves-light #90caf9 #1e88e5 blue darken-1"
                                onClick={() => followUser()}>
                                Follow
                </button>
                        </div>

                    </div>

                    <div className="gallery">
                        {
                            userProfile.posts.map(item => {
                                return (
                                    <img key={item._id} className="item" alt={item.title} src={item.photo} />
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