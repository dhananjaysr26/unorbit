import React from 'react'
import "../index.css";

import { BsPersonFill } from "react-icons/bs";
function Home() {
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
                    <ul className="list-view">
                        <li className="list "><BsPersonFill style={{ color: "blue", marginRight: "10px" }} />Dhananjay Singh</li>
                        <li className="list "><BsPersonFill style={{ color: "blue", marginRight: "10px" }} />Shivam Singh</li>

                        <li className="list "><BsPersonFill style={{ color: "blue", marginRight: "10px" }} />Rahul Singh</li>

                        <li className="list "><BsPersonFill style={{ color: "blue", marginRight: "10px" }} />Vicky jha</li>

                        <li className="list "><BsPersonFill style={{ color: "blue", marginRight: "10px" }} />Jash Singh</li>

                        <li className="list "><BsPersonFill style={{ color: "blue", marginRight: "10px" }} />Rohan Thube</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Home
