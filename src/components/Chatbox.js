import React, { useState, useEffect } from 'react'
import "./Chatbox.css"
import axios from "axios";
import { MdExpandMore } from "react-icons/md";
import { HiOutlineChatAlt2 } from "react-icons/hi";
function Chatbox() {
    const [chatopen, setChatopen] = useState(0);
    const [users, setUsers] = useState([]);
    useEffect(async () => {
        await axios.get('https://panorbit.in/api/users.json')
            .then(res => {
                setUsers(res.data.users);
            });
    }, [])
    return (
        <div>
            <div className="chatbox">
                <div><HiOutlineChatAlt2 />
                    <span>Chats</span>
                    <MdExpandMore style={{ float: "right", cursor: "pointer" }} onClick={
                        () => chatopen ? setChatopen(0) : setChatopen(1)}
                    />
                </div>
                {
                    chatopen ?

                        <div className="chat-container">

                            <ul className="chat-view">
                                {
                                    users.map((userData) => {
                                        return (
                                            <li className="chat-list ">{userData.name}</li>
                                        )
                                    })}

                            </ul>
                        </div>
                        : <p></p>

                }

            </div>
            <div className="chatting">

            </div>
        </div>
    )
}

export default Chatbox
