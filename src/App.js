import React from 'react';
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sing-up.component";
import {Route, Switch, Redirect} from "react-router-dom";
import {auth} from "./firebase/firebase.utils";
import MainPage from "./pages/main-page/main-page.component";
import {createUserProfile} from "./firebase/firebase.utils";
import {connect} from 'react-redux';

import './App.css';
import {setCurrentUser} from "./redux/user/user.actions";


class App extends React.Component {

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async(userAuth)=>{
            if(userAuth){
                const userRef = createUserProfile(userAuth);
                (await userRef).onSnapshot((snapshot) => {
                    setCurrentUser(
                        {
                            id:snapshot.id,
                            ...snapshot.data()
                        }
                    );
                })
            }else{
                setCurrentUser(userAuth);
            }
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }


    render() {
        const {currentUser} = this.props;
        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route  exact path={'/'} component={MainPage}/>
                    <Route exact path={'/signin'} render={()=>currentUser?<Redirect to={'/'}/>:<SignInSignUpPage/>}/>
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = (state)=>{
    return {
        currentUser:state.users.currentUser
    }
};

const mapDispatchToProps = (dispatch)=>{
    return{
        setCurrentUser: (user)=>dispatch(setCurrentUser(user))
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(App);
