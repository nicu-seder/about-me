import React from "react";
import {ReactComponent as Logo} from '../../assets/undraw_cabin.svg';
import {Link} from "react-router-dom";
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux';
import './header.styles.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link className='logo-container' to={'/'}>
            <Logo className='logo'/>
        </Link>
        <div className='header-title'>
            <h2 className='header-title-content'>Mood Photo Album</h2>
        </div>
        <div className='options'>
            <span className='option'>ABOUT</span>
            <span className='option'>CONTACT</span>
            {
                currentUser?
                    <span className='option' onClick={()=>auth.signOut()}>SIGN OUT</span>:
                    <Link className='option' to={'/signin'}>SIGN IN</Link>
            }

        </div>
    </div>
);

const mapStateToProps = (state)=>{
    return {
        currentUser:state.users.currentUser
    }
};

export default connect(mapStateToProps, null)(Header);