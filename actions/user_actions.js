import { AsyncStorage } from 'react-native';
import axios from 'axios';

const API_LINK = 'http://52.53.165.44';

export const getUserData = async () => {
    const USER_ID = await AsyncStorage.getItem('user')
    axios.get(`${API_LINK}/users/${USER_ID}`)
};
