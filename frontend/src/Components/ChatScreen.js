import { Avatar } from '@mui/material';
import React, { useState } from 'react';
import "../CSS/ChatScreen.css";
import { deepOrange } from '@mui/material/colors';

const ChatScreen = () => {
    const [input, setInput] = useState([]);
    const [messages, setMessages] = useState([
        {
            name: "Nadal",
            profilePic: "https://www.atptour.com/-/media/alias/player-headshot/N409",
            message: "busy?",
        },
        {
            name: "Nadal",
            profilePic: "https://www.atptour.com/-/media/alias/player-headshot/N409",
            message: "u there?",
        },
        {
            message: "Yes how are you Nadal",
        },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");

    };
    return (
        <div className='chatScreen'>
            <p className='chatScreen__timestamp'>You Matched with namePlaceholder on matchdateplaceholder</p>
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