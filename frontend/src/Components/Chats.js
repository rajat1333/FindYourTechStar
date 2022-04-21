import React from 'react';
import "../CSS/Chats.css";
import ChatRow from './ChatRow';

const Chats = () => {
    return (
        <div className='chats'>
            <ChatRow
                name="Mark"
                message="yo whats up!"
                timestamp="40 seconds ago"
            // profilePic="https://i.mydramalist.com/QL1o6_5f.jpg"
            />
            <ChatRow
                name="Sandra"
                message="how are you"
                timestamp="45 minutes ago"
                profilePic="https://i.pinimg.com/originals/6a/74/e4/6a74e4cf4c16d463a73d1ab2ec9351e5.jpg"
            />
            <ChatRow
                name="Nadal"
                message="busy?"
                timestamp="1 hour ago"
                profilePic="https://www.atptour.com/-/media/alias/player-headshot/N409"
            />
            <ChatRow
                name="Kunal"
                message="where are you"
                timestamp="30 seconds ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/2/25/Kunal_Nayyar_by_Gage_Skidmore.jpg"
            />
        </div>
    )
}

export default Chats