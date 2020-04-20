import React from "react";
import LandingPage from "../landing-page/landing-page.component";
import HomePage from "../home-page/home-page";
import {connect} from 'react-redux';

import './main-page.styles.scss'

const MainPage = ({currentUser})=>(
    <div className='main-page'>
        {
            currentUser?
                <HomePage/>:
                <LandingPage/>
        }
    </div>
);

const mapStateToProps = (state)=>{
    return {
        currentUser:state.users.currentUser
    }
};

export default connect(mapStateToProps, null)(MainPage);