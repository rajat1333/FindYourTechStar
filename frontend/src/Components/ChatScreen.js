import axios from '../config/axios';
import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "../CSS/ChatScreen.css";
import { deepOrange } from '@mui/material/colors';
import { useParams } from 'react-router-dom';


const ChatScreen = () => {
    const [input, setInput] = useState([]);
    const { matchUserId, matchUserProfilePic, matchUserName } = useParams();
    const userId = "f961ade5-df68-4ea1-976c-6eb370919bbd";
    const [messages, setMessages] = useState([]);



    const handleSend = (e) => {
        e.preventDefault();
        const data = {
            toId: matchUserId,
            fromId: userId,
            message: input,
            timeStamp: new Date(),
        }
        axios.post('/messages', data)
            .then(response => {
                console.log("Message Saved :", response.data);
                setMessages([...messages, { message: input }]);
                setInput("");
            })
            .catch(err => {
                console.log(err);
            })

    };
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You Matched with {matchUserName} on matchdateplaceholder</p>
            {messages.map(message => (

                message.name ? (<div className='chatScreen__message'>
                    <Avatar className='chatScreen__image'
                        alt={message.name}
                        src={message.profilePic}
                        sx={{ bgcolor: deepOrange[500] }}
                    />
                    <p className='chatScreen__text'>{message.message}</p>
                </div>) : (<div className='chatScreen__message'>
                    <p className='chatScreen__Usertext'>{message.message}</p>
                </div>)


            ))}

            <form className='chatScreen__inputContainer'>
                <input className='chatScreen__inputField' value={input} onChange={(e) => setInput(e.target.value)} type='text' placeholder='Type a message' />
                <button className='chatScreen__inputButton' type="submit" onClick={handleSend} >SEND</button>
            </form>
        </div>
    )
}

export default ChatScreen