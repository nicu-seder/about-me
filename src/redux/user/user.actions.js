import {UserActions} from "./user.action.types";


export const setCurrentUser = (user)=>{
    //returns an action object
    return {
        type:UserActions.SET_CURRENT_USER,
        payload:user
    }
};