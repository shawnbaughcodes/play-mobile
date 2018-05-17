import {
	USER_FETCH_SUCCESS,
	GET_USER_SPORTS_SUCCESS,
	GET_USER_FRIENDS_SUCCESS,
	SUBMIT_POST_SUCCESS,
	POST_TEXT_CHANGED,
	ADD_FRIEND_SUCCESS,
	GET_ALL_POSTS_SUCCESS,
	SIGN_OUT,
} from '../actions/types';

const INITIAL_STATE = {
	firstName: "",
	lastName: "",
	userSports: {},
	friends: {},
	posts: {},
	userTeams: {},
	post: '',
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USER_FETCH_SUCCESS:

			return {
				firstName: action.payload.fName,
				lastName: action.payload.lName,
				posts: action.payload.posts,
				userSports: action.payload.sports,
				friends: action.payload.friends,
				userTeams: action.payload.userTeams,
			};

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
		case POST_TEXT_CHANGED:
			return {
				...state,
				post: action.payload
			}
		case SUBMIT_POST_SUCCESS:
			return {
				...state,
				posts: action.payload
			}
		case ADD_FRIEND_SUCCESS:
			return {
				...state,
				friends: action.payload
			}
		case GET_ALL_POSTS_SUCCESS:
			return {
				...state,
				posts: action.payload
			}
		case SIGN_OUT:
			return INITIAL_STATE;
		default:
			return state;
	}
};
