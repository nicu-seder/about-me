import React from 'react';
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sing-up.component";
import {Route, Switch} from "react-router-dom";
import {auth} from "./firebase/firebase.utils";
import MainPage from "./pages/main-page/main-page.component";

import './App.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currenUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        //this is a listener which listens everytime a user signs in
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=>{
            this.setState({currentUser:user});
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        return (
            <div className="App">
                <Header currentUser={this.state.currentUser}/>
                <Switch>
                    <Route  exact path={'/'}>
                        <MainPage currentUser={this.state.currentUser}/>
                    </Route>
                    {/*<Route  exact path={'/signin'}>*/}
                    {/*    <SignInSignUpPage currentUser={this.state.currentUser}/>*/}
                    {/*</Route>*/}
                    <Route exact path={'/signin'} component={SignInSignUpPage}/>
                </Switch>
            </div>
        );
    }

}

export default App;
