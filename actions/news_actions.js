import axios from 'axios';
import { FETCH_FOOTBALL_NEWS } from './types';

const API = require('../api-key');

const NEWS_EVERYTHING_ROOT_URL = 'https://newsapi.org/v2/top-headlines?';
const SPORTS_SOURCE = 'sources=the-sport-bible&apiKey=';

export const getSportsData = () => async dispatch => {
  try {
    const { data } = await axios.get(
      `${NEWS_EVERYTHING_ROOT_URL}${SPORTS_SOURCE}${API.key}`
    );
    dispatch({ type: FETCH_FOOTBALL_NEWS, payload: data });
  } catch (e) {
    // console.log(e);
  }
};
