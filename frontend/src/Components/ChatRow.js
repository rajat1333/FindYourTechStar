import React from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import "../CSS/ChatRow.css";
import { Link } from 'react-router-dom';

const ChatRow = ({ name, message, profilePic, timestamp }) => {


    return (
        <Link to={`/chats/${name}`}>
            <div className='chatRow'>
                <Avatar className='chatRow__image' sx={{ bgcolor: deepOrange[500] }} alt={name} src={profilePic} />
                <div className='chatRow__details'>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className='chatRow__timestamp'>{timestamp}</p>
            </div></Link>

    )
}

export default ChatRow