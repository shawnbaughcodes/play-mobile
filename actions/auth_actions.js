import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { Facebook } from 'expo';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  FNAME_CHANGED,
  LNAME_CHANGED,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAIL,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL
} from './types';

//TEXT CHANGES
export const emailChanged = (text) => {
  return { type: EMAIL_CHANGED, payload: text };
};
export const passwordChanged = (text) => {
  return { type: PASSWORD_CHANGED, payload: text };
};
export const fNameChanged = (text) => {
  return { type: FNAME_CHANGED, payload: text };
};
export const lNameChanged = (text) => {
  return { type: LNAME_CHANGED, payload: text };
};

// REGISTER
export const registerUser = ({ email, password }) => {
  return async (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => registerUserSuccess(dispatch, response))
      .catch((error) => registerUserFail(dispatch, error));
  };
};

export const registerUserInfo = ({ fName, lName, sports, teams }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser}`)
      .push({ fname, lname, sports, teams })
      .then(() => {
        dispatch({ type: UPDATE_USER_INFO_SUCCESS })
      })
      .catch((err) => {
        dispatch({ type: UPDATE_USER_INFO_FAIL })
      })
  }
}

// LOGIN
export const doEmailLogin = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => loginUserFail(dispatch, error))
  }
};

// LOCAL FUNCTIONS
const registerUserSuccess = async (dispatch, user) => {
  dispatch({ type: REGISTER_USER_SUCCESS, payload: user })
  await AsyncStorage.setItem(user_id, user.uid);
}

const registerUserFail = (dispatch, error) => {
  dispatch({ type: REGISTER_USER_FAIL, payload: error });
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
  AsyncStorage.setItem(user_id, user.uid);
}

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: error });
}

// SCHEMA

/*
    users: {
        user: {
            email,
            password,
            firstName,
            lastName,
            sports,
            teams,
        }
    }
*/
