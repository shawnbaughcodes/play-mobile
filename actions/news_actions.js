import axios from 'axios';
import { FETCH_FOOTBALL_NEWS } from './types';

const key = require('../api-key');

const NEWS_EVERYTHING_ROOT_URL = 'https://newsapi.org/v2/everything?';

// FOOTBALL ACTION
const FOOTBALL_SOURCE = 'sources=nfl-news&apiKey=';

export const getFootBallData = () => async (dispatch) => {
    try {
        const { data } = await axios.get(`${NEWS_EVERYTHING_ROOT_URL}${FOOTBALL_SOURCE}${key.API_KEY}`)
        dispatch({ type: FETCH_FOOTBALL_NEWS, payload: data });
    } catch (e) {
        console.log(e);
    }

};
