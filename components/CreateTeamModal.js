import React from 'react';
import { Modal, View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Input } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const CreateTeamModal = props => {
  const {
    createTeamModalVisible,
    onCloseModal,
    onTeamNameChanged,
    onTeamLeaderNameChanged,
    onPlayersChanged
  } = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={createTeamModalVisible}
    >
      <SafeAreaView
        forceInset={{ top: 'always' }}
        style={styles.safeAreaStyles}
      >
        <View style={styles.formContainer}>
          <Text style={styles.headerStyles}>Create Team</Text>
          <Input
            inputContainerStyle={styles.inputStyles}
            placeholder="Team Name"
            onChangeText={onTeamNameChanged}
          />
          <Input
            inputContainerStyle={styles.inputStyles}
            placeholder="Team Leader"
            onChangeText={onTeamLeaderNameChanged}
          />
          <Input
            inputContainerStyle={styles.inputStyles}
            placeholder="Players"
            onChangeText={onPlayersChanged}
          />
          <Input
            inputContainerStyle={styles.inputStyles}
            placeholder="Sport"
            // onChangeText={onPlayersChanged}
          />
        </View>
        <Button
          buttonStyle={styles.submitStyles}
          onPress={onCloseModal}
          title="Create"
        />
        <Button
          buttonStyle={styles.cancelStyles}
          onPress={onCloseModal}
          title="Cancel"
        />
      </SafeAreaView>
    </Modal>
  );
};

styles = {
  containerStyles: {
    flex: 1
  },
  formContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center'
  },
  headerStyles: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 50
  },
  safeAreaStyles: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  inputStyles: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 5
  },
  submitStyles: {
    width: SCREEN_WIDTH / 2,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'black',
    marginBottom: 20
  },
  cancelStyles: {
    width: SCREEN_WIDTH / 2,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'grey',
    marginBottom: 10
  }
};

export default CreateTeamModal;
