import { FETCH_FOOTBALL_NEWS } from '../actions/types'

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_FOOTBALL_NEWS:
            return { ...state, news: action.payload };
        default:
            return state;
    }
};
