import React from 'react';
import { Modal } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';

const CreateTeamModal = props => {
  const { createTeamModalVisible, onCloseModal } = props;
  console.log(createTeamModalVisible);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={createTeamModalVisible}
    >
      <SafeAreaView>
        <Button onPress={onCloseModal} />
      </SafeAreaView>
    </Modal>
  );
};

styles = {
  containerStyles: {
    flex: 1
  }
};

export default CreateTeamModal;
