import React from "react";
import LandingPage from "../landing-page/landing-page.component";
import HomePage from "../home-page/home-page";

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

export default MainPage;