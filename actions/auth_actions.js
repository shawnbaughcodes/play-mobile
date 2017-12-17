import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    FNAME_CHANGED,
    LNAME_CHANGED,
    REGISTER_USER_SUCCESS
} from './types';

const API_LINK = 'http://13.57.43.155';
export const facebookLogin = () => async dispatch => {
    let tokenFB = await AsyncStorage.getItem('fb_token');
    if (tokenFB) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: tokenFB });
    } else {
        doFacebookLogin(dispatch);
    }
};
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};
export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};
export const fNameChanged = (text) => {
    return {
        type: FNAME_CHANGED,
        payload: text
    };
};
export const lNameChanged = (text) => {
    return {
        type: LNAME_CHANGED,
        payload: text
    };
};

export const registerUser = ({ fname, lname, email, password }) => {
    return (dispatch) => {
        axios.post(`${API_LINK}/users`, {
            firstname: fname,
            lastname: lname,
            email,
            password
        })
        .then(response => {
            dispatch({ type: REGISTER_USER_SUCCESS, payload: response });
        })
        .catch((error) => {
            console.log(error);
        });
    };
};
export const doEmailLogin = ({ email, password }) => {
};
const doFacebookLogin = async dispatch => {
    const { tokenFB, type } = await Facebook.logInWithReadPermissionsAsync('133231130689020', {
        permissions: ['public_profile', 'email']
    });
    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
    await AsyncStorage.setItem('fb_token', tokenFB);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: tokenFB });
};
