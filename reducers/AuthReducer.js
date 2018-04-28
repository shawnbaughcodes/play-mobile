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
    user: {},
    userIsRegistered: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FNAME_CHANGED:
            return {
                ...state,
                fname: action.payload
            };
        case LNAME_CHANGED:
            return {
                ...state,
                lname: action.payload
            };
        case EMAIL_CHANGED:
            return {
                ...state,
                email: action.payload
            };
        case PASSWORD_CHANGED:
            return {
                ...state,
                password: action.payload
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                userIsRegistered: true
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                ...INITIAL_STATE
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                userIsRegistered: true,
            };
        case LOGIN_USER_FAIL:
            return { ...state, ...INITIAL_STATE, error: action.payload };
        default:
            return state;
    }
};
