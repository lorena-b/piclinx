import React from 'react';

const Profile = () => {

    return (

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
                    <h4>Julie Sun</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width:"108%" }}>
                        <h5>40 Posts</h5>
                        <h5>40 followers</h5>
                        <h5>40 following</h5>
                    </div>
                </div>

            </div>

            <div className="gallery">
                <img className="item" alt="post" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"/>
                <img className="item" alt="post" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"/>
                <img className="item" alt="post" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"/>
                <img className="item" alt="post" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"/>
                <img className="item" alt="post" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"/>
                <img className="item" alt="post" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_ocW9x-t2gGJPKg3iqvoEfm7qJSB9ujqnqA&usqp=CAU"/>
           
            </div>
        </div>




    )



}

export default Profile; 