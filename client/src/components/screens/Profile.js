import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../App'


const Profile = () => {
    const [mypics, setPics] = useState([])
    const { state, dispatch } = useContext(UserContext)
    const [image, setImage] = React.useState("")
    const [url, setUrl] = React.useState("")

    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")

            }
        }).then(res => res.json())
            .then(result => {
                setPics(result.mypost)
            })
    })

    useEffect(()=>{

        if (image) {
            const data = new FormData()
            data.append("file", image)
            data.append("upload_preset", "piclinx")
            data.append("cloud_name", "piclinx-cloud")
            fetch("https://api.cloudinary.com/v1_1/piclinx-cloud/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    setUrl(data.url)
                    console.log(data)
                    localStorage.setItem("user", JSON.stringify({...state,pic:data.url}))
                    dispatch({type:"UPDATEPIC", payload:data.url})
                    window.location.reload()
                })
                .catch(err => {
                    console.log(err)
                })
        }
       
    },[image])

    const updatePhoto = (file) => {
        setImage(file)
    }

    return (

        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
            <div style={{
                margin: "18px 0px",
                borderBottom: "1px solid grey"
            }}>
             
            <div style={{
                display: "flex",
                justifyContent: "space-around",

            }}>
                <div>
                    <img style={{ width: "160px", height: "160px", borderRadius: "80px" }}
                        src={state ? state.pic : "Loading..."}
                        alt="profileimg" />
                </div>
                <div>
                    <h4>{state ? state.name : "Loading..."}</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h5>{mypics.length} Posts</h5>
                        <h5>{state ? state.followers.length : 0} Followers</h5>
                        <h5>{state ? state.following.length : 0} Following</h5>
                    </div>
                </div>

            </div>
                <div className="file-field input-field">
                <div className="btn #90caf9 #1e88e5 blue darken-1">
                        <span>Upload Profile Picture</span>
                        <input type="file" onChange={(e) => updatePhoto(e.target.files[0])} />
                    </div>

                    <div className="file-path-wrapper">
                        <input className="file-path validate" type="text" />
                    </div>

                </div>
                </div>
            <div className="gallery">
                {
                    mypics.map(item => {
                        return (
                            <img key={item._id} className="item" alt={item.title} src={item.photo} />
                        )
                    })
                }

            </div>
        </div>

    )

}

export default Profile; 