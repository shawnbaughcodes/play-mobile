import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

import AccountModal from '../components/AccountModal';
import Header from '../components/Header';
import EventTile from '../components/EventTile';
import EventModal from '../components/EventModal';
import CreateEventModal from '../components/CreateEventModal';

const SCREEN_HEIGHT = Dimensions.get('window').height;

const HomeScreen = props => {
  const {
    createEventModalVisible,
    post,
    posts,
    submitPost,
    onOpenAccountModal,
    onOpenEventModal,
    onCloseModal,
    accountModalVisible,
    postModalVisible,
    user,
    signOut,
    navigation,
    onPostTextChange,
    onOpenCreateEventModal,
    onOpenEventInfoModal,
    eventInfoModalVisible
  } = props;

  return (
    <SafeAreaView forceInset={{ top: 'always' }} style={styles.safeAreaStyles}>
      <Header onOpenAccountModal={onOpenAccountModal} screenName="Home" />
      <ScrollView style={styles.mainScrollStyles}>
        <View>
          <Text style={styles.titleStyles}>Your Events</Text>
          {/* <FlatList horizontal renderItem={() => <EventTile />}> */}
          <EventTile onOpenEventInfoModal={onOpenEventInfoModal} />
        </View>
        <View>
          <Text style={styles.titleStyles}>Events In Your Area</Text>
          <TouchableOpacity>
            <EventTile />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Icon
        color="#00aced"
        containerStyle={styles.iconStyles}
        name="create"
        onPress={onOpenCreateEventModal}
        raised
      />
      <View style={styles.modalStyles}>
        <AccountModal
          modalVisible={accountModalVisible}
          user={user}
          navigation={navigation}
          onCloseModal={onCloseModal}
        />
        <EventModal
          onCloseModal={onCloseModal}
          eventInfoModalVisible={eventInfoModalVisible}
        />
        <CreateEventModal
          onCloseModal={onCloseModal}
          createEventModalVisible={createEventModalVisible}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  iconStyles: {
    zIndex: 50,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  safeAreaStyles: {
    flex: 1
  },
  mainScrollStyles: {
    paddingTop: 30
  },
  titleStyles: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 15
  },
  modalStyles: {
    zIndex: 600,
    height: 0
  }
};

export default HomeScreen;
