import TeamsScreen from '../screens/TeamsScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    createTeamModalVisible: state.ui.modals.createTeamModalVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTeamNameChanged: () => dispatch(actions.teamNameChanged),
    onTeamLeaderNameChanged: () => dispatch(actions.teamLeaderNameChanged),
    onPlayersChanged: () => dispatch(actions.playersChanged),
    onOpenCreateTeamModal: () => dispatch(actions.openCreateTeamModal()),
    onCloseModal: () => dispatch(actions.closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamsScreen);
