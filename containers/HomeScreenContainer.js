import { connect } from 'react-redux';
import * as actions from '../actions';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => ({
  post: state.user.post,
  friends: state.user.friends,
  posts: state.user.posts,
  accountModalVisible: state.ui.modals.accountModalVisible,
  postModalVisible: state.ui.modals.accountModalVisible,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onGetAllPosts: () => dispatch(actions.getAllPosts()),
  onSubmitPost: () => dispatch(actions.submitPost()),
  onPostTextChanged: text => dispatch(actions.postTextChanged(text)),
  onOpenAccountModal: () => dispatch(actions.openAccountModal()),
  onOpenPostModal: () => dispatch(actions.openPostModal()),
  onCloseModal: () => dispatch(actions.closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
