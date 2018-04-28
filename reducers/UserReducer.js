import {
    USER_FETCHED,
    GET_USER_SPORTS_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
    first_name: "",
    last_name: "",
    userSports: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_FETCHED:
            return { user: action.payload };

        case GET_USER_SPORTS_SUCCESS:
            state.userSports.push(action.payload);
            return { ...state };

        default:
            return state;
    }
};
