import React, { useState, useEffect } from 'react';
import './Dashboard.css'
import { Link } from "react-router-dom";
import userPic from "../Assets/user.png";
import Chatbox from './Chatbox';

function Dashboard(props) {
    var userData = props.location.state.data;
    console.log("Hello");
    console.log(userData);
    const [procard, setProcard] = useState(0);
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="sidebar-content">
                    <ul className="sidebar-link">
                        <li className="link">Profile</li>
                        <li className="link">Posts</li>
                        <li className="link">Gallery</li>
                        <li className="link">Todo</li>
                    </ul>
                </div>
            </div>
            <div className="topbar">
                <p className="head-title">Profile</p>
                <div className="right-head">
                    <p onClick={() => procard ? setProcard(0) : setProcard(1)}> <img src={userPic} className="user-pic" />
                        {userData.name}</p>
                    {
                        procard ?
                            <div className="user-profile">
                                <img src={userPic} className="user-pic-medium" />
                                <h3>{userData.name}</h3>
                                <small>{userData.email}</small>
                                <button className="sign-out-btn" ><Link style={{ textDecoration: "none" }} to="/">Sign out</Link></button>
                            </div>
                            : <p></p>
                    }
                </div>



            </div>

            <div className="maind">
                <div className="main-left">
                    <div className="profile">
                        <img src={userData.profilepicture} className="circular_image" />
                    </div>
                    <div className="profile-info">
                        <p className="profile-head">{userData.name}</p>
                        <div className="text-view">
                            <label>Username:</label><p>{userData.username}</p>
                        </div>
                        <div className="text-view">
                            <label>Email:</label><p>{userData.email}</p>
                        </div>
                        <div className="text-view">
                            <label>Phone:</label><p>{userData.phone}</p>
                        </div>
                        <div className="text-view">
                            <label>Website:</label><p>{userData.website}</p>
                        </div>
                    </div>

                    <div className="company">
                        <p className="profile-head">Company</p>
                        <div className="text-view">
                            <label>Name:</label><p>{userData.company.name}</p>
                        </div>
                        <div className="text-view">
                            <label>Catchphrase:</label><p>{userData.company.catchPhrase}</p>
                        </div>
                        <div className="text-view">
                            <label>Bs:</label><p>{userData.company.bs}</p>
                        </div>


                    </div>
                </div>
                <div className="main-right">
                    <p className="address-head">Address</p>
                    <div className="text-view">
                        <label>Street:</label><p>{userData.address.street}</p>
                    </div>
                    <div className="text-view">
                        <label>Suite:</label><p>{userData.address.suite}</p>
                    </div>
                    <div className="text-view">
                        <label>City:</label><p>{userData.address.city}</p>
                    </div>
                    <div className="text-view">
                        <label>Zipcode:</label><p>{userData.address.zipcode}</p>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9781770827453!2d-95.42231078555916!3d29.95130632992282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c989620294bb%3A0xa6021601def2bd1f!2sGlenborough%20Dr%2C%20Houston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1632400506552!5m2!1sen!2sin" width="500" height="250" style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
            <Chatbox />
        </div >
    )
}

export default Dashboard
