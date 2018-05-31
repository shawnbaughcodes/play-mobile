import React from 'react';
import { View, Text, Modal } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button } from 'react-native-elements';

const EventModal = props => {
  const { eventInfoModalVisible, onCloseModal } = props;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={eventInfoModalVisible}
    >
      <SafeAreaView
        forceInset={{ top: 'always' }}
        style={styles.safeAreaStyles}
      >
        <View style={styles.headerStyles}>
          <Text>Team vs. Team or Player vs. Player</Text>
        </View>
        <Button title="CLOSE" onPress={onCloseModal} />
      </SafeAreaView>
    </Modal>
  );
};
const styles = {
  safeAreaStyles: {
    flex: 1,
    justifyContent: 'center',
    zIndex: 2
  },
  headerStyles: {
    height: 200,
    backgroundColor: 'pink',
    zIndex: 2
  }
};
export default EventModal;
