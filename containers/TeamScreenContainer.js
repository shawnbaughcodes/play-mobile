import TeamsScreen from '../screens/TeamsScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => ({
  createTeamModalVisible: state.ui.modals.createTeamModalVisible
});

const mapDispatchToProps = dispatch => ({
  onOpenCreateTeamModal: () => dispatch(actions.openCreateTeamModal),
  onCloseModal: () => dispatch(actions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsScreen);
