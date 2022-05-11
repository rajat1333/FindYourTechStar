import axios from '../config/axios';
import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import "../CSS/ChatRow.css";
import { Link, useNavigate } from 'react-router-dom';

const ChatRow = ({ name, message, profilePic, timestamp, matchId }) => {

    const [matchUserData, setMatchUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const matchUser = await axios.get(matchId);
            console.log("matchUser", matchUser);
            if (matchUser.data && matchUser.data.length !== 0) {
                setMatchUserData(matchUser.data);
            }
        }
        fetchUser();
    }, [])

    return (
        // <Link to={`/chats/${matchUserData.userId}`}>
        <div className='chatRow' onClick={() => navigate('/chatscreen', {
            matchUserId: matchUserData.userId
            , matchUserName: matchUserData.name, matchUserProfilePic: matchUserData.profilePic
        })}>
            <Avatar className='chatRow__image' sx={{ bgcolor: deepOrange[500] }}
                alt={matchUserData.name} src={matchUserData.profilePic} />
            <div className='chatRow__details'>
                <h2>{matchUserData.name}</h2>
                <p>{message}</p>
            </div>
            <p className='chatRow__timestamp'>{timestamp}</p>
        </div>
        // </Link>

    )
}

export default ChatRow