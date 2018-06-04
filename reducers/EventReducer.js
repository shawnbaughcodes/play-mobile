import {
  CREATE_EVENT_SUCCESS,
  EVENT_NAME_CHANGED,
  TEAMS_INFO_CHANGE,
  LOCATION_INFO_CHANGED,
  DATE_INFO_CHANGED
} from '../actions/types';

const initialState = {
  eventName: '',
  teamInfo: '',
  location: '',
  dateInfo: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EVENT_NAME_CHANGED:
      return { ...state, eventName: action.payload };

    case TEAMS_INFO_CHANGE:
      return { ...state, teamInfo: action.payload };

    case LOCATION_INFO_CHANGED:
      return { ...state, location: action.payload };

    case DATE_INFO_CHANGED:
      return { ...state, dateInfo: action.payload };

    default:
      return state;
  }
};
