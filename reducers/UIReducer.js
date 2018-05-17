import { OPEN_MODAL, CLOSE_MODAL, SIGN_OUT } from '../actions/types';
import { NavigationActions } from 'react-navigation'

const INITIAL_STATE = {
  modalVisible: false,
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, modalVisible: action.payload, };

    case CLOSE_MODAL:
      return { ...state, modalVisible: action.payload, };

    default:
      return state;
  }
};
