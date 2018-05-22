import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import SinglePost from '../components/SinglePost';
import AnyModal from '../components/Modal';

import AccountModal from '../components/AccountModal';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
  state = {
    posts: {}
  };

  componentWillMount() {
    this.props.onGetAllPosts();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ posts: nextProps.posts });
  }
  onPostTextChange = text => {
    this.props.onPostTextChanged(text);
  };
  onSubmitPost = () => {
    const { post } = this.props;
    this.props.onSubmitPost({ post });
  };
  renderPostCards = posts => {
    let content;
    if (posts === null) {
      content = (
        <SinglePost firstname="LOADING" lastname="POSTS" post="LOADING..." />
      );
    } else {
      content = Object.values(posts).map(post => (
        <SinglePost
          key={post.content}
          firstname={post.userId}
          lastname="Superlongname"
          post={post.content}
        />
      ));
    }

    return content;
  };

  render() {
    console.log(this.props);
    const {
      post,
      posts,
      submitPost,
      onOpenAccountModal,
      onOpenPostModal,
      accountModalVisible,
      postModalVisible,
      user,
      signOut,
      navigation,
      onPostTextChange
    } = this.props;

    return (
      <SafeAreaView
        forceInset={{ top: 'always' }}
        style={styles.safeAreaStyles}
      >
        <AccountModal
          modalVisible={accountModalVisible}
          user={user}
          navigation={navigation}
        />
        <View style={styles.headerStyles}>
          <TouchableOpacity onPress={onOpenAccountModal}>
            <Icon name="menu" size={25} style={styles.hamburgerStyles} />
          </TouchableOpacity>
          <Text style={styles.headerTextStyles}>Home</Text>
          <TouchableOpacity>
            <Icon name="search" size={25} style={styles.hamburgerStyles} />
          </TouchableOpacity>
        </View>
        {postModalVisible && (
          <AnyModal>
            <TextInput
              autoFocus
              editable={true}
              multiline={true}
              numberOfLines={10}
              onChangeText={onPostTextChange}
              placeholder="What's on your mind..."
              style={{
                paddingBottom: 200,
                paddingTop: 45,
                paddingLeft: 20,
                paddingRight: 20,
                fontSize: 25
              }}
              value={post}
            />
            <Button
              title="Post"
              onPress={() => {
                this.showPostModal(), this.onSubmitPost();
              }}
            />
            <Button title="Cancel" onPress={() => this.showPostModal()} />
          </AnyModal>
        )}
        <Icon
          color="#00aced"
          containerStyle={styles.iconStyles}
          name="create"
          onPress={onOpenPostModal}
          raised
        />
        <ScrollView style={{ flex: 1 }}>
          {this.renderPostCards(posts)}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = {
  iconStyles: {
    zIndex: 5000,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  safeAreaStyles: {
    flex: 1
  },
  headerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyles: {
    fontSize: 20
  }
};

export default HomeScreen;
