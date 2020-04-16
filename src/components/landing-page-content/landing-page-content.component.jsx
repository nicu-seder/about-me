import React from "react";
import {ReactComponent as Logo} from "../../assets/undraw_photos.svg"

import './landing-page-content.styles.scss'

const LandingPageContent = (props)=>{
    return(
        <div className='landing-page-content'>
            <div className='logo-container'>
                <Logo className={'logo'}/>
            </div>
            <h2 className='title'>Please sign in to see your photos</h2>
        </div>
    )
};

export default LandingPageContent;