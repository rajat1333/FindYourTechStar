import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../CSS/NavigationBar.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NavigationBar = ({ backButton, forwardButton }) => {
    const navigate = useNavigate();
    return (
        <div className='navigationbar'>
            {backButton ? (
                <IconButton onClick={() => navigate(backButton)}>
                    <ArrowBackIosNewIcon className='navigationbar__icon' fontSize='large' />
                </IconButton>
            ) : (
                <IconButton onClick={() => navigate("/profile")}>
                    <PersonIcon className='navigationbar__icon' fontSize='large' />
                </IconButton>
            )

            }
            <Link to="/">
                <img className='navigationbar__logo'
                    src='https://logowik.com/content/uploads/images/red-star7476.jpg'
                    alt='Place logo here' />
            </Link>
            {forwardButton ? (
                <IconButton onClick={() => navigate(forwardButton)}>
                    <ArrowForwardIosIcon className='navigationbar__icon' fontSize='large' />
                </IconButton>
            ) : (
                <IconButton onClick={() => navigate("/chats")}>
                    <ChatIcon className='navigationbar__icon' fontSize='large' />
                </IconButton>

            )}

        </div>
    )
}

export default NavigationBar