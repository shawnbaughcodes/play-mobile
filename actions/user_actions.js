import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { USER_FETCH_SUCCESS, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAIL, GET_USER_SPORTS_SUCCESS } from './types';

export const getUserData = (dispatch) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}`)
            .on('value', snapshot => {
                dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() })
            })
    }
};

export const addSportsData = (sport) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/sports/`)
            .push(sport)
            .then(() => {
                dispatch({ type: UPDATE_USER_INFO_SUCCESS })
            })
    }
}

export const getUserSports = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/sports`)
            .on('value', snapshot => {
                dispatch({ type: GET_USER_SPORTS_SUCCESS, payload: snapshot.val() })
            })
    }
}