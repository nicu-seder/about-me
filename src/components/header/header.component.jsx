import React from "react";
import {ReactComponent as Logo} from '../../assets/linkedin.svg';

import './header.styles.scss'

const Header = (props)=>(
    <div className='header'>
        <Logo className = 'logo'/>
        <div className='header-title'>
            <h2  className='header-title-content'>Photo Album</h2>
        </div>
        <div className='options'>
            <span className='option'>ABOUT</span>
            <span className='option'>CONTACT</span>
        </div>
    </div>
);

export default Header;