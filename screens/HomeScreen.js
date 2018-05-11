import React, { Component } from 'react';
import { View, ScrollView, Dimensions, TextInput } from 'react-native';
import { Icon, Button, } from 'react-native-elements';
import { connect } from 'react-redux';

import SinglePost from '../components/SinglePost';
import HeaderComp from '../components/HeaderComp';
import AnyModal from '../components/Modal';

import * as actions from '../actions'
import AccountScreen from './AccountScreen';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
	state = {
		isModalVisible: false,
		posts: {},
	}
	componentWillMount() {
		this.props.getAllPosts();
	}
	componentWillReceiveProps(nextProps) {
		this.setState({ posts: nextProps.posts });
	}
	onPostTextChange = (text) => {
		this.props.postTextChanged(text);
	}
	onSubmitPost = () => {
		const { post } = this.props;
		this.props.submitPost({ post });
	}
	onOpenAccount = () => {
		this.props.navigation.navigate('account');
	}
	showPostModal = () => this.setState({ isModalVisible: !this.state.isModalVisible });

	render() {
		const { isModalVisible, posts } = this.state;
		console.log(Object.values(posts));

		const { post, submitPost } = this.props;
		return (
			<View style={{ flex: 1 }}>
				{isModalVisible &&
					<AnyModal>
						<TextInput
							autoFocus
							editable={true}
							multiline={true}
							numberOfLines={10}
							onChangeText={this.onPostTextChange}
							placeholder="What's on your mind..."
							style={{ paddingBottom: 200, paddingTop: 45, paddingLeft: 20, paddingRight: 20, fontSize: 25 }}
							value={post}
						/>
						<Button title="Post" onPress={() => { this.showPostModal(), this.onSubmitPost() }} />
						<Button title="Cancel" onPress={() => this.showPostModal()} />
					</AnyModal>
				}
				<Icon
					color='#00aced'
					containerStyle={styles.iconStyles}
					name='create'
					onPress={this.showPostModal}
					raised
				/>
				<ScrollView style={{ flex: 1 }}>
					{Object.values(posts).map(post =>
						<SinglePost
							firstname={post.userId}
							lastname='Superlongname'
							post={post.content}
						/>
					)}
				</ScrollView>
			</View>
		);
	}
}

const styles = {
	iconStyles: {
		zIndex: 5000,
		position: 'absolute',
		bottom: 10,
		right: 10,
	}
}

function mapStateToProps(state) {
	return {
		post: state.user.post,
		friends: state.user.friends,
		posts: state.user.posts,
	}
}

export default connect(mapStateToProps, actions)(HomeScreen);
