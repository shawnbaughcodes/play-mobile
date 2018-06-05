import firebase from 'firebase';
import {
  GET_ALL_TEAMS_SUCCESS,
  GET_ALL_TEAMS_FAIL,
  CREATE_TEAM_SUCCESS,
  CREATE_TEAM_FAIL,
  UPDATE_TEAM_SUCCESS,
  UPDATE_TEAM_FAIL,
  TEAM_NAME_CHANGED,
  TEAM_LEADER_NAME_CHANGED,
  PLAYERS_CHANGED
} from './types';

export const teamNameChanged = text => {
  return { type: TEAM_NAME_CHANGED, payload: text };
};

export const teamLeaderNameChanged = text => {
  return { type: TEAM_LEADER_NAME_CHANGED, payload: text };
};

export const playersChanged = text => {
  return { type: PLAYERS_CHANGED, payload: text };
};

export const getAllTeams = () => {
  return dispatch => {
    firebase
      .database()
      .ref('/teams/')
      .on('value', snapshot => {
        dispatch({
          type: GET_ALL_TEAMS_SUCCESS,
          payload: snapshot.val()
        });
      })
      .catch(error => {
        dispatch({ type: GET_ALL_TEAMS_FAIL, payload: error });
      });
  };
};

export const createNewTeam = ({
  teamName,
  teamSport,
  teamDescription,
  teamLocation,
  players,
  teamLead
}) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/teams/${currentUser.uid}/teams/team/`)
      .push({
        teamName,
        teamSport,
        teamDescription,
        teamLocation,
        players,
        teamLead
      })
      .then(() => {
        dispatch({ type: CREATE_TEAM_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: CREATE_TEAM_FAIL });
      });
  };
};

export const updateTeam = ({
  teamName,
  teamSport,
  teamDescription,
  teamLocation,
  teamLead
}) => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/teams/${currentUser.uid}/teams/team/`)
      .set({ teamName, teamSport, teamDescription, teamLocation, teamLead })
      .then(() => {
        dispatch({ type: UPDATE_TEAM_SUCCESS });
      })
      .catch(() => {
        dispatch({ type: UPDATE_TEAM_FAIL });
      });
  };
};

export const deleteTeam = team => {
  const { currentUser } = firebase.auth();
  const { teamLead } = firebase
    .database()
    .ref(`/teams/${currentUser.uid}/teams/${team}/`);
};
