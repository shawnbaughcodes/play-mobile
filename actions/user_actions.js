import { AsyncStorage } from 'react-native';
import firebase from 'firebase';
import { USER_FETCH_SUCCESS, UPDATE_USER_INFO_SUCCESS, UPDATE_USER_INFO_FAIL, GET_USER_SPORTS_SUCCESS, GET_USER_FRIENDS_SUCCESS, SUBMIT_POST_SUCCESS, POST_TEXT_CHANGED, ADD_FRIEND_SUCCESS, GET_ALL_POSTS_SUCCESS, SIGN_OUT } from './types';

export const postTextChanged = (text) => {
	return { type: POST_TEXT_CHANGED, payload: text };
};

export const getUserData = (dispatch) => {
	const { currentUser } = firebase.auth();

	return async (dispatch) => {
		const storedCurrentUser = await AsyncStorage.getItem('user_id');
		firebase.database().ref(`/users/${storedCurrentUser}`)
			.on('value', snapshot => {
				dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() })
			})
	}
};

export const addSportsData = (sport) => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`users/${currentUser.uid}/sports/`)
			.push(`${sport}`)
			.then(() => {
				dispatch({ type: UPDATE_USER_INFO_SUCCESS })
			})
	}
}

export const getUserSports = () => {
	const { currentUser } = firebase.auth();
	return (dispatch) => {
		firebase.database().ref(`/users/${currentUser.uid}/sports`)
			.on('value', snapshot => {
				dispatch({ type: GET_USER_SPORTS_SUCCESS, payload: snapshot.val() })
			})
	}
}

export const getUserFriends = () => {
	return async (dispatch) => {
		const storedCurrentUser = await AsyncStorage.getItem('user_id');
		firebase.database().ref(`/users/${storedCurrentUser}/friends`)
			.on('value', snapshot => {
				dispatch({ type: GET_USER_FRIENDS_SUCCESS, payload: snapshot.val() })
			})
	}
}

export const addFriend = ({ friend }) => {
	return async (dispatch) => {
		const storedCurrentUser = await AsyncStorage.getItem('user_id');
		firebase.database().ref(`/users/${storedCurrentUser}/friends`)
			.push(friend)
			.then(() => {
				dispatch({ type: ADD_FRIEND_SUCCESS })
			})
	}
}

export const submitPost = ({ post }) => {
	return async (dispatch) => {
		const currentUserId = await AsyncStorage.getItem('user_id');
		const currentUserfName = await AsyncStorage.getItem('user_fName');
		const currentUserlName = await AsyncStorage.getItem('user_lName');
		const today = new Date().toLocaleString();

		firebase.database().ref(`/users/${storedCurrentUser}/posts`)
			.push({ content: post, userId: storedCurrentUser, fName: currentUserfName, lName: currentUserlName, createdAt: today })
			.then(() => {
				dispatch({ type: SUBMIT_POST_SUCCESS })
			})
	}

}

export const getAllPosts = () => {
	return async (dispatch) => {
		const storedCurrentUser = await AsyncStorage.getItem('user_id');
		firebase.database().ref(`/users/${storedCurrentUser}/posts`)
			.on('value', snapshot => {
				dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: snapshot.val() })
			})
	}
}

export const signOut = () => {
	return async (dispatch) => {
		AsyncStorage.removeItem('user_id');
		AsyncStorage.removeItem('user_fName');
		AsyncStorage.removeItem('user_lName');
	}
}
