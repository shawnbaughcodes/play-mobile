import firebase from 'firebase';
import { GET_ALL_SPORTS_FAIL, GET_ALL_SPORTS_SUCCESS } from './types';

export const getAllSports = () => {
  return (dispatch) => {
    firebase.database().ref('/sports')
      .on('value', snapshot => {
        dispatch({ type: GET_ALL_SPORTS_SUCCESS, payload: snapshot.val() })
      })
      .catch((error) => {
        dispatch({ type: GET_ALL_SPORTS_FAIL, payload: error })
      })
  }
}