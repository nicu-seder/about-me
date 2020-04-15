import React from 'react';
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sing-up.component";
import {Route, Switch} from "react-router-dom";

import './App.css';
import LandingPage from "./pages/landing-page/landing-page.component";

function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route exact path={'/'} component={LandingPage}/>
                <Route exact path={'/signin'} component={SignInSignUpPage}/>
            </Switch>
        </div>
    );
}

export default App;
