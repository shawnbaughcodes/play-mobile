import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { USER_FETCH_SUCCESS, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAIL } from './types';

export const getUserData = (dispatch) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .on('value', snapshot => {
                dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() })
            })
    }
};

export const updateUserData = ({ fName, lName, sports, teams }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}`)
            .set({ fName, lName, sports, teams })
            .then(() => {
                dispatch({ type: UPDATE_USER_INFO_SUCCESS })
            })
            .catch(() => {
                dispatch({ type: UPDATE_USER_INFO_FAIL })
            })
    }
}
