import axios from '../config/axios';
import React, { useEffect, useState } from 'react';
import "../CSS/Chats.css";
import ChatRow from './ChatRow';

const Chats = () => {
    const [matchIds, setMatchIds] = useState([]);
    const userId = "f961ade5-df68-4ea1-976c-6eb370919bbd";

    useEffect(() => {
        const fetchIds = async () => {
            const req = await axios.get("/matches/" + userId);
            if (req.data && req.data.length !== 0) {
                const Ids = req.data.map(arr => arr.user1Id === userId ? arr.user2Id : arr.user1Id);
                setMatchIds([...matchIds, ...Ids]);
            }
        }
        fetchIds();
    }, []);

    useEffect(() => {
        console.log("match", matchIds);
    })
    return matchIds.length === 0 ? (
        <div className='noChats'>
            <h3>No Matches Yet</h3>
        </div>) : (
        <div className='chats'>
            {matchIds.map((matchId) => (<ChatRow key={matchId}
                name="Mark"
                message="yo whats up!"
                timestamp="40 seconds ago"
                matchId={matchId}
            // profilePic="https://i.mydramalist.com/QL1o6_5f.jpg"
            />))
            }
        </div>
    )
}

export default Chats