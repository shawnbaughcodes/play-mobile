import {
  CLOSE_MODAL,
  OPEN_ACCOUNT_MODAL,
  OPEN_EVENT_MODAL,
  OPEN_EVENT_INFO_MODAL,
  OPEN_CREATE_EVENT_MODAL,
  OPEN_CREATE_TEAM_MODAL,
  OPEN_USER_SPORTS_MODAL
} from './types';

export const openAccountModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_ACCOUNT_MODAL, payload: true });
  };
};

export const openEventModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_EVENT_MODAL, payload: true });
  };
};

export const openEventInfoModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_EVENT_INFO_MODAL, payload: true });
  };
};

export const openCreateEventModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_CREATE_EVENT_MODAL, payload: true });
  };
};

export const openCreateTeamModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_CREATE_TEAM_MODAL, payload: true });
  };
};

export const openUserSportsModal = dispatch => {
  return dispatch => {
    dispatch({ type: OPEN_USER_SPORTS_MODAL, payload: true });
  };
};

export const closeModal = dispatch => {
  return dispatch => {
    dispatch({ type: CLOSE_MODAL, payload: false });
  };
};
