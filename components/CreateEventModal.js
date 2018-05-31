import React from 'react';
import { View, Text, Modal, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Input } from 'react-native-elements';
const SCREEN_WIDTH = Dimensions.get('window').width;

const CreateEventModal = props => {
  const { createEventModalVisible, onCloseModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={createEventModalVisible}
    >
      <SafeAreaView
        forceInset={{ top: 'always' }}
        style={styles.safeAreaStyles}
      >
        <View style={styles.formContainer}>
          <Text style={styles.headerStyles}>Create Event</Text>
          <Input
            inputContainerStyle={styles.inputStyles}
            placeholder="Team v Team"
          />
          <Input
            inputContainerStyle={styles.inputStyles}
            placeholder="Coordinator"
          />
          <Input inputContainerStyle={styles.inputStyles} placeholder="When" />
          <Input inputContainerStyle={styles.inputStyles} placeholder="Where" />
          <Input inputContainerStyle={styles.inputStyles} placeholder="Teams" />
        </View>
        <Button title="CREATE" buttonStyle={styles.submitStyles} />
        <Button
          title="CLOSE"
          onPress={onCloseModal}
          buttonStyle={styles.cancelStyles}
        />
      </SafeAreaView>
    </Modal>
  );
};
const styles = {
  safeAreaStyles: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
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
export default CreateEventModal;
