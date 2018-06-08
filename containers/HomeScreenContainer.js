import { connect } from 'react-redux';
import * as actions from '../actions';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => ({
  post: state.user.post,
  friends: state.user.friends,
  posts: state.user.posts,
  accountModalVisible: state.ui.modals.accountModalVisible,
  eventModalVisible: state.ui.modals.eventModalVisible,
  eventInfoModalVisible: state.ui.modals.eventInfoModalVisible,
  createEventModalVisible: state.ui.modals.createEventModalVisible,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onGetAllPosts: () => dispatch(actions.getAllPosts()),
  onSubmitPost: () => dispatch(actions.submitPost()),
  onPostTextChanged: text => dispatch(actions.postTextChanged(text)),
  onOpenAccountModal: () => dispatch(actions.openAccountModal()),
  onOpenEventModal: () => dispatch(actions.openEventModal()),
  onOpenEventInfoModal: () => dispatch(actions.openEventInfoModal()),
  onOpenCreateEventModal: () => dispatch(actions.openCreateEventModal()),
  onCloseModal: () => dispatch(actions.closeModal()),
  onSignOut: () => dispatch(actions.signOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
