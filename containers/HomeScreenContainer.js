import { connect } from 'react-redux';
import * as actions from '../actions';
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => ({
  post: state.user.post,
  friends: state.user.friends,
  posts: state.user.posts,
  modalVisible: state.ui.modalVisible,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  submitPost: () => dispatch(submitPost())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
