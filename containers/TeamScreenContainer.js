import TeamsScreen from '../screens/TeamsScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => {
  console.log(state);

  return {
    createTeamModalVisible: state.ui.modals.createTeamModalVisible,
    accountModalVisible: state.ui.modals.accountModalVisible,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTeamNameChanged: () => dispatch(actions.teamNameChanged),
    onTeamLeaderNameChanged: () => dispatch(actions.teamLeaderNameChanged),
    onPlayersChanged: () => dispatch(actions.playersChanged),
    onOpenCreateTeamModal: () => dispatch(actions.openCreateTeamModal()),
    onCloseModal: () => dispatch(actions.closeModal()),
    onOpenAccountModal: () => dispatch(actions.openAccountModal()),
    onSignOut: () => dispatch(actions.signOut())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsScreen);
