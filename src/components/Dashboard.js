import React from 'react';
import './Dashboard.css'

import userPic from "../Assets/user.jpeg";
function Dashboard() {
    return (
        <div className="dashboard">
            <div className="sidebar">
                <div className="sidebar-content">
                    <ul className="list-view">
                        <li className="list">Profile</li>
                        <li className="list">Posts</li>
                        <li className="list">Gallery</li>
                        <li className="list">Todo</li>
                    </ul>
                </div>
            </div>
            <div className="topbar">
                <div className="topbar-content">
                    <h1>Profile</h1>
                    <h2>Dhananjay Singh</h2>
                </div>
            </div>

            <div className="maind">
                <div className="main-left">
                    <div className="profile">
                        <img src={userPic} className="circular_image" />
                    </div>
                    <div className="profile-info">
                        <h1>Dhananjay Singh</h1>
                        <div className="text-view">
                            <label>Username:</label><h3>dhananjaysr26</h3>
                        </div>
                        <div className="text-view">
                            <label>Email:</label><h3>dhananjaysr26@gmail.com</h3>
                        </div>
                        <div className="text-view">
                            <label>Phone:</label><h3>dhananjaysr26</h3>
                        </div>
                        <div className="text-view">
                            <label>Website:</label><h3>uncoders.in</h3>
                        </div>
                    </div>

                    <div className="company">
                        <h1>Company</h1>
                        <div className="text-view">
                            <label>Name:</label><h3>uncoders.in</h3>
                        </div>
                        <div className="text-view">
                            <label>Catchphrase:</label><h3>Software</h3>
                        </div>
                        <div className="text-view">
                            <label>Bs:</label><h3>Soft Market</h3>
                        </div>


                    </div>
                </div>
                <div className="main-right">
                    <h1>Address</h1>
                    <div className="text-view">
                        <label>Street:</label><h3>Kulas Light</h3>
                    </div>
                    <div className="text-view">
                        <label>Suite:</label><h3>Apt .556</h3>
                    </div>
                    <div className="text-view">
                        <label>City:</label><h3>Gnenborough</h3>
                    </div>
                    <div className="text-view">
                        <label>Zipcode:</label><h3>92998-3874</h3>
                    </div>
                    <div className="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.9781770827453!2d-95.42231078555916!3d29.95130632992282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c989620294bb%3A0xa6021601def2bd1f!2sGlenborough%20Dr%2C%20Houston%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1632400506552!5m2!1sen!2sin" width="500" height="250" style={{ borderRadius: "10px" }} allowfullscreen="" loading="lazy"></iframe>
                    </div>

                </div>
            </div>




        </div>
    )
}

export default Dashboard
