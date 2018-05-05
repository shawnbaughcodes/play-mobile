import {
    USER_FETCHED,
    GET_USER_SPORTS_SUCCESS,
    GET_USER_FRIENDS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    first_name: "",
    last_name: "",
    userSports: [],
    friends: [],
    posts: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FETCHED:
            return { user: action.payload };

        case GET_USER_SPORTS_SUCCESS:
            return {
                ...state,
                userSports: action.payload
            };
        case GET_USER_FRIENDS_SUCCESS:
            return {
                ...state,
                friends: []
            }

        default:
            return state;
    }
};
