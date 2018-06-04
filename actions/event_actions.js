import {
  CREATE_EVENT_SUCCESS,
  EVENT_NAME_CHANGED,
  TEAMS_INFO_CHANGE,
  LOCATION_INFO_CHANGED,
  DATE_INFO_CHANGED
} from './types';

export const teamsInfoChanged = text => {
  return { type: TEAMS_INFO_CHANGE, payload: text };
};

export const locationInfoChanged = text => {
  return { type: LOCATION_INFO_CHANGED, payload: text };
};

export const dateInfoChanged = text => {
  return { type: DATE_INFO_CHANGED, payload: text };
};

export const eventNameChanged = text => {
  return { type: EVENT_NAME_CHANGED, payload: text };
};
