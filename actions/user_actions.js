import { AsyncStorage } from 'react-native';
import axios from 'axios';
import { USER_FETCHED } from './types';

const API_LINK = 'http://52.53.165.44';

export const getUserData = () => async (dispatch) => {
    const USER_ID = await AsyncStorage.getItem('user');
    axios.get(`${API_LINK}/users/${USER_ID}`)
        .then(response => {
            dispatch({ type: USER_FETCHED, payload: response });
        })
        .catch((error) => {
            console.log(`Error ${error}`);
        });
};
