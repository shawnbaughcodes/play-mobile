import { OPEN_MODAL, CLOSE_MODAL } from './types';

export const openModal = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: OPEN_MODAL, payload: true });
  }
}

export const closeModal = (dispatch) => {
  return (dispatch) => {
    dispatch({ type: CLOSE_MODAL, payload: false });
  }
}
