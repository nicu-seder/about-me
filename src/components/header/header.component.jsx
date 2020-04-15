import React from "react";
import {ReactComponent as Logo} from '../../assets/undraw_cabin.svg';
import {Link} from "react-router-dom";

import './header.styles.scss'

const Header = (props) => (
    <div className='header'>
        <Link className='logo-container' to={'/'}>
            <Logo className='logo'/>
        </Link>
        <div className='header-title'>
            <h2 className='header-title-content'>Photo Album</h2>
        </div>
        <div className='options'>
            <span className='option'>ABOUT</span>
            <span className='option'>CONTACT</span>
            <Link className='option' to={'/signin'}>SIGN IN</Link>
        </div>
    </div>
);

export default Header;