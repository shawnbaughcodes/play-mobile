import {
  OPEN_MODAL,
  CLOSE_MODAL,
  OPEN_ACCOUNT_MODAL,
  OPEN_POST_MODAL
} from './types';

export const openAccountModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_ACCOUNT_MODAL, payload: true });
  };
};

export const openPostModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_POST_MODAL, payload: true });
  };
};

export const closeModal = dispatch => {
  return dispatch => {
    dispatch({ type: CLOSE_MODAL, payload: false });
  };
};
