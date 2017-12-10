import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import axios from 'axios';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from './types';

export const facebookLogin = () => async dispatch => {
    let token = await AsyncStorage.getItem('fb_token');
    if (token) {
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token })
    } else {
        doFacebookLogin(dispatch);
    }
}

const doFacebookLogin = async dispatch => {
    let { token, type } = await Facebook.logInWithReadPermissionsAsync('133231130689020', {
        permissions: ['public_profile']
    });
    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }
    await AsyncStorage.setItem('fb_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
