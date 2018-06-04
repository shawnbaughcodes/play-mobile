import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Icon } from 'react-native-elements';

import TeamCard from '../components/TeamCard';
import CreateTeamModal from '../components/CreateTeamModal';

const TeamsScreen = props => {
  const { createTeamModalVisible, onCloseModal, onOpenCreateTeamModal } = props;

  return (
    <SafeAreaView style={styles.teamsStyle}>
      <ScrollView>
        <TeamCard teamname="Team Name" teamlead="Team Lead" />
        <TeamCard teamname="Team Name" teamlead="Team Lead" />
        <TeamCard teamname="Team Name" teamlead="Team Lead" />
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
  }
};

export default TeamsScreen;
