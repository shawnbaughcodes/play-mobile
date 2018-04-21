import {AsyncStorage} from 'react-native';
import firebase from 'firebase';
import {Facebook} from 'expo';
import {
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
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

// export const facebookLogin = () => async dispatch => {   let tokenFB = await
// AsyncStorage.getItem('fb_token');   if (tokenFB) {     dispatch({type:
// FACEBOOK_LOGIN_SUCCESS, payload: tokenFB});   } else {
// doFacebookLogin(dispatch);   } }; TEXT CHANGES
export const emailChanged = (text) => {
  return {type: EMAIL_CHANGED, payload: text};
};
export const passwordChanged = (text) => {
  return {type: PASSWORD_CHANGED, payload: text};
};
export const fNameChanged = (text) => {
  return {type: FNAME_CHANGED, payload: text};
};
export const lNameChanged = (text) => {
  return {type: LNAME_CHANGED, payload: text};
};
// REGISTER
export const registerUser = ({email, password}) => {
  return async(dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async response => registerUserSuccess(dispatch, response))
      .catch((error) => registerUserFail(dispatch, error));
  };
};

export const registerUserInfo = ({fName, lName, sports, teams}) => {
  const {currentUser} = firebase.auth();
  return (dispatch) => {
    firebase
      .database()
      .ref(`/users/${currentUser}`)
      .push({fname, lname, sports, teams})
      .then(() => {
        dispatch({type: UPDATE_USER_INFO_SUCCESS})
      })
      .catch((err) => {
        dispatch({type: UPDATE_USER_INFO_FAIL})
      })
  }
}
// LOGIN
export const doEmailLogin = ({email, password}) => {
  // return dispatch({ type: LOGIN_USER })
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => loginUserSuccess(dispatch, user))
    .catch((err) => loginUserFail(dispatch, error))
};

// LOCAL FUNCTIONS const doFacebookLogin = async dispatch => {     const {token,
// type} = await Facebook.logInWithReadPermissionsAsync('133231130689020', {
// permissions: ['public_profile', 'email']     });     if (type === 'cancel') {
//         return dispatch({type: FACEBOOK_LOGIN_FAIL});     } await
// AsyncStorage.setItem('fb_token', token);     dispatch({type:
// FACEBOOK_LOGIN_SUCCESS, payload: token}); };

const registerUserSuccess = async(dispatch, user) => {
  dispatch({type: REGISTER_USER_SUCCESS, payload: user})
  await AsyncStorage.setItem('user_id', user.uid);
}

const registerUserFail = (dispatch, error) => {
  dispatch({type: REGISTER_USER_FAIL, payload: error});
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({type: LOGIN_USER_SUCCESS, payload: user});
}

const loginUserFail = (dispatch, error) => {
  dispatch({type: LOGIN_USER_FAIL, payload: error});
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
