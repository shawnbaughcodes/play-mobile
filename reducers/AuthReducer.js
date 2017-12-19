import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    FNAME_CHANGED,
    LNAME_CHANGED,
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    fname: '',
    lname: '',
    user: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case FNAME_CHANGED:
            return { ...state, fname: action.payload };
        case LNAME_CHANGED:
            return { ...state, lname: action.payload };
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case FACEBOOK_LOGIN_SUCCESS:
            return { ...state, token: action.payload };
        case FACEBOOK_LOGIN_FAIL:
            return { token: null };
        case REGISTER_USER_SUCCESS:
            return { ...state, user: action.payload.data.user, tokenEM: action.payload.data.token };
        case REGISTER_USER_FAIL:
            return { token: null };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload };
        case LOGIN_USER_FAIL:
            return { token: null };
        default:
            return state;
    }
};
