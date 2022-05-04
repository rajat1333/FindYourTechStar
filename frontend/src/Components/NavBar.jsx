import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './NavBar.css'
import logo from '../assets/logo4.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ForumIcon from '@mui/icons-material/Forum';


const NavBar = () => {
    // const classes=useStyles();
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)
    var loggedin=false;//to handle
    return (
        <div className='header'>
        <nav className='navbar'>
            <a href='/findyourtechstar' className='logo'>
                <img src={logo} alt='logo' />
            </a>
            {/* <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

            </div> */}
            <div>
            {(loggedin &&  <Button size="large" startIcon={<AccountCircleIcon />} component = {Link} to="/profile"/>)}
            {(loggedin &&  <Button size="large" startIcon={<PeopleOutlineIcon />} component = {Link} to="/matches"/>)}
            {(loggedin &&  <Button size="large" startIcon={<ForumIcon />}component = {Link} to="/chats"/>)}
            {(!loggedin && <Button variant="contained" className='login-button' component = {Link} to="/login">Log in</Button>)}
            {(loggedin && <Button variant="contained" className='login-button' component = {Link} to="/findyourtechstar">Log Out</Button>)}
            </div>
        </nav>
    </div>
    );
};

export default NavBar;