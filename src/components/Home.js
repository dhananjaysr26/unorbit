import React, { useState, useEffect } from 'react';
import "../index.css";
import axios from "axios";
import { Link } from "react-router-dom";
function Home() {
    const [users, setUsers] = useState([]);
    useEffect(async () => {
        await axios.get('https://panorbit.in/api/users.json')
            .then(res => {
                setUsers(res.data.users);
            });
    }, [])
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#5000ca" fill-opacity="1" d="M0,160L30,160C60,160,120,160,180,170.7C240,181,300,203,360,224C420,245,480,267,540,272C600,277,660,267,720,229.3C780,192,840,128,900,117.3C960,107,1020,149,1080,186.7C1140,224,1200,256,1260,256C1320,256,1380,224,1410,208L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
            </svg>
            <div className="container">
                <div className="container-head">
                    <p>Select an Account</p>
                </div>
                <div className="container-main">
                    {
                        users.map((userData) => {
                            return (
                                <ul className="list-view">
                                    <Link to={{
                                        pathname: '/dashboard',
                                        state: { data: userData }
                                    }} style={{ textDecoration: "none" }}><li className="list "
                                    ><img src={userData.profilepicture} style={{ color: "blue", marginRight: "10px" }} />{userData.name}</li>
                                    </Link>
                                </ul>

                            )
                        })
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
