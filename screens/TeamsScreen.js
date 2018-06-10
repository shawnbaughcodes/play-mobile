import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TeamCard from '../components/TeamCard';
import CreateTeamModal from '../components/CreateTeamModal';
import Header from '../components/Header';
import AccountModal from '../components/AccountModal';

const TeamsScreen = props => {
  const {
    createTeamModalVisible,
    onCloseModal,
    onOpenCreateTeamModal,
    onOpenAccountModal,
    accountModalVisible,
    onSignOut,
    user,
    navigation
  } = props;

  return (
    <SafeAreaView style={styles.teamsStyle}>
      <Header onOpenAccountModal={onOpenAccountModal} screenName="Teams" />
      <ScrollView>
        <TeamCard teamname="Team Name" teamlead="Team Lead" />
        {/* <TeamCard teamname="Team Name" teamlead="Team Lead" />
        <TeamCard teamname="Team Name" teamlead="Team Lead" /> */}
      </ScrollView>
      <View style={styles.modalStyles}>
        <CreateTeamModal
          createTeamModalVisible={createTeamModalVisible}
          onCloseModal={onCloseModal}
        />
      </View>
      <Icon
        color="#00aced"
        containerStyle={styles.createTeamStyles}
        name="people"
        onPress={onOpenCreateTeamModal}
        raised
      />
      <View style={styles.modalStyles}>
        <AccountModal
          modalVisible={accountModalVisible}
          user={user}
          navigation={navigation}
          onCloseModal={onCloseModal}
          onSignOut={onSignOut}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = {
  teamsStyle: {
    flex: 1
  },
  createTeamStyles: {
    zIndex: 50,
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  modalStyles: {
    zIndex: 600,
    height: 0
  },
  modalStyles: {
    zIndex: 600,
    height: 0
  }
};

export default TeamsScreen;
