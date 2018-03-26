import {
    USER_FETCHED
} from '../actions/types';


export default (state = {}, action) => {
    switch (action.type) {
        case USER_FETCHED:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};
