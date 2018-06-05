import {
  TEAM_NAME_CHANGED,
  TEAM_LEADER_NAME_CHANGED,
  PLAYERS_CHANGED
} from '../actions/types';

const initialState = {
  players: [],
  teamLeader: '',
  teamName: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TEAM_NAME_CHANGED:
      return { ...state, teamName: action.payload };

    case TEAM_LEADER_NAME_CHANGED:
      return { ...state, teamLeader: action.payload };

    case PLAYERS_CHANGED:
      return { ...state, players: state.players.push(action.payload) };

    default:
      return state;
  }
};
