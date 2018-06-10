import React from 'react';
import { View, Text, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';

const UserSportsModal = props => {
  const {
    userSportsModalVisible,
    onCloseModal,
    userSports,
    userSportsValues,
    userSportsKeys
  } = props;
  console.log(userSports);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={userSportsModalVisible}
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={styles.wrapperStyles}>
        {userSportsValues.map(value => <Text key={value}>{value}</Text>)}
        <Button onPress={onCloseModal} title="Exit" />
      </SafeAreaView>
    </Modal>
  );
};

const styles = {
  wrapperStyles: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  }
};

export default UserSportsModal;
