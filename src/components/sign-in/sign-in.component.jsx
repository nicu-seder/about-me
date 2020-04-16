import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {withRouter} from 'react-router-dom';
import {auth, googleProvider} from '../../firebase/firebase.utils'

import './sign-in.styles.scss'


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    //This is a function that does the sign in with google. If it succeeds then it redirect to a page
    //If this function is called, it tries to perform the sign in transaction which returns a promise
    //If the promise is resolved, 'then' is exectuted otherwise 'catch'
    signInWithGoogle = async () => (
        await auth.signInWithPopup(googleProvider).then((result) => {
            this.props.history.push('/');
            console.log("User Credentials",result);
        }).catch((error) => {
            console.log("Sign in didn't work")
        })
    );

    handleOnSubmit = (event) => (
        event.preventDefault()
    );

    handleOnChange = async (event) => {
        const {name, value} = event.target;
        //setState is an async operation. First we wait to finish and then we do the next operation.
        //the tag where the event happens is identified by the name property
        //once the input changes the state is also changed
        await this.setState({[name]: value});

        console.log(this.state.email, this.state.password);
    };

    render() {
        return (
            <div className='sign-in'>
                <h2 className={'title'}>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form onSubmit={this.handleOnSubmit} className='sign-in-form'>
                    <FormInput
                        name='email' //the event.target gives back the markup where the event happened identified by the name property
                        type='email'    //type property helps us to validate that indeed there is an email format
                        value={this.state.email}
                        label='email' //this is a property we need for the label element in our FormInput component
                        required //it checks if the respective filed is required
                        handleChange={this.handleOnChange} //property which fires on the change event happens on the input
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        required
                        handleChange={this.handleOnChange}
                    />
                    <div className='button-container'>
                        {/*Buttons with type submit inside a form markup will behave as default
                        trying to submit the information from the input
                        All the properties you put here can be destructured in the target component
                        with the spread operator ...otherProperties
                        The component CustomButton doesn't have an event onClick, but as we gave it here in
                        the properties, it will be destructured and spread in the target component, where the
                        button tag will have an event handler added*/}
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={this.signInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }

}

export default withRouter(SignIn);