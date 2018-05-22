import {
  OPEN_ACCOUNT_MODAL,
  OPEN_POST_MODAL,
  CLOSE_MODAL,
  SIGN_OUT
} from '../actions/types';
import { NavigationActions } from 'react-navigation';

const INITIAL_STATE = {
  modals: {
    accountModalVisible: false,
    postModalVisible: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_ACCOUNT_MODAL:
      return { ...state, modals: { accountModalVisible: action.payload } };

    case OPEN_POST_MODAL:
      return {
        ...state,
        modals: { postModalVisible: action.payload }
      };

    case CLOSE_MODAL:
      return {
        ...state,
        modals: {
          accountModalVisible: action.payload,
          postModalVisible: action.payload
        }
      };

    default:
      return state;
  }
};
