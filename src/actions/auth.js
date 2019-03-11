import * as actionTypes from './actionTypes';
import {firebase,googleAuthProvider} from '../firebaseConfig';

export const startLogin = () => {
    return dispatch=>{
        return firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const startLogout = () => {
    return dispatch=>{
        return firebase.auth().signOut();
    }
}

export const login = (uid) => ({
  type: actionTypes.LOGIN,
  uid
});

export const logout = () => ({
    type: actionTypes.LOGOUT,
    
  })
  
