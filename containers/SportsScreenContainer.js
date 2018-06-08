import SportsScreen from '../screens/SportsScreen';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = state => {
  return {
    sports: state.sports.sports,
    userSports: state.user.userSports,
    user: state.user,
    accountModalVisible: state.ui.modals.accountModalVisible,
    userSportsModalVisible: state.ui.modals.userSportsModalVisible
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllSports: () => dispatch(actions.getAllSports()),
    onUpdateUserSports: sport => dispatch(actions.addSportsData(sport)),
    onRemoveUserSport: sport => dispatch(actions.removeSportsData(sport)),
    onGetUserSports: () => dispatch(actions.getUserSports()),
    onCloseModal: () => dispatch(actions.closeModal()),
    onSignOut: () => dispatch(actions.signOut()),
    onOpenAccountModal: () => dispatch(actions.openAccountModal()),
    onOpenUserSportsModal: () => dispatch(actions.openUserSportsModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SportsScreen);
