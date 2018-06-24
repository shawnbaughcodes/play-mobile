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
export const emailChanged = text => {
  return { type: EMAIL_CHANGED, payload: text };
};
export const passwordChanged = text => {
  return { type: PASSWORD_CHANGED, payload: text };
};
export const fNameChanged = text => {
  return { type: FNAME_CHANGED, payload: text };
};
export const lNameChanged = text => {
  return { type: LNAME_CHANGED, payload: text };
};

// REGISTER
export const registerUser = ({ fname, lname, email, password }) => {
  const userInfo = { fname, lname };
  return async dispatch => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => registerUserSuccess(dispatch, response, userInfo))
      .catch(error => registerUserFail(dispatch, error));
  };
};

// LOGIN
export const doEmailLogin = ({ email, password }) => {
  return dispatch => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => loginUserFail(dispatch, error));
  };
};

// LOCAL FUNCTIONS
const registerUserSuccess = async (dispatch, user, userInfo) => {
  const { currentUser } = firebase.auth();
  const { fname, lname } = userInfo;
  firebase
    .database()
    .ref(`users/${currentUser.uid}/`)
    .set({
      firstName: fname,
      lastName: lname,
      posts: {},
      friends: {},
      userSports: {},
      userTeams: {}
    });

  await AsyncStorage.setItem('user_id', currentUser.uid);
  await AsyncStorage.setItem('user_fName', fname);
  await AsyncStorage.setItem('user_lName', lname);
  dispatch({ type: REGISTER_USER_SUCCESS, payload: user });
};

const registerUserFail = (dispatch, error) => {
  dispatch({ type: REGISTER_USER_FAIL, payload: error });
};

const loginUserSuccess = (dispatch, user) => {
  firebase
    .database()
    .ref(`users/${user.uid}`)
    .on('value', snapshot => {
      const { firstName, lastName } = snapshot.val();

      AsyncStorage.setItem('user_id', user.uid);
      AsyncStorage.setItem('user_fName', firstName);
      AsyncStorage.setItem('user_lName', lastName);
      dispatch({ type: LOGIN_USER_SUCCESS, payload: user });
    });
};

const loginUserFail = (dispatch, error) => {
  dispatch({ type: LOGIN_USER_FAIL, payload: error });
};
