import {
  GET_ALL_SPORTS_SUCCESS,
  GET_USER_SPORTS_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  sports: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ALL_SPORTS_SUCCESS:
      return { ...state, sports: action.payload };

    default:
      return state;
  }
};
