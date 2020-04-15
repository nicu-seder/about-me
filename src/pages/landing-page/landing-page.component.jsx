import React from "react";
import LandingPageContent from "../../components/landing-page-content/landing-page-content.component";


import './landing-page.styles.scss'

const LandingPage = (props)=>{
    return(
        <div className={'landing-page'}>
            <LandingPageContent/>
        </div>
    )
};

export default LandingPage;