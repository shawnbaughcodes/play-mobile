import React from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import { Avatar } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import AccountSelection from './AccountSelection';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

const AccountModal = props => {
  const { onCloseModal, modalVisible, user, signOut, navigation } = props;
  console.log(props);

  return (
    <Modal animationType="fade" transparent={false} visible={modalVisible}>
      <SafeAreaView style={styles.safeAreaStyles}>
        <View>
          <View style={styles.userHeadStyle}>
            <Avatar
              xlarge
              rounded
              source={{
                uri:
                  'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg'
              }}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View style={styles.infoStyles}>
            <Text style={styles.nameStyles}>{`${user.firstName} ${
              user.lastName
            }`}</Text>
            <Text style={styles.hometownStyles}>Hometown</Text>
            <Text style={styles.headlineStyles}>Headline</Text>
          </View>
          <ScrollView style={styles.containerStyle}>
            <TouchableOpacity>
              <AccountSelection title="Teams" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AccountSelection title="Upcoming Games" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AccountSelection title="My Sports" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => signOut() && navigation.popToTop()}
            >
              <AccountSelection style={{ color: 'red' }} title="Sign Out" />
            </TouchableOpacity>
            <TouchableOpacity onPress={onCloseModal}>
              <AccountSelection style={{ color: 'red' }} title="Close" />
            </TouchableOpacity>
          </ScrollView>
        </View>
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
  userHeadStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 25,
    paddingBottom: 25
  },
  infoStyles: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  nameStyles: {
    textAlign: 'center',
    fontSize: 25
  },
  hometownStyles: {
    textAlign: 'center',
    fontSize: 13,
    color: 'grey'
  },
  headlineStyles: {
    textAlign: 'center',
    fontSize: 15
  },
  lasttitleStyle: {
    color: 'red'
  }
};

export default AccountModal;
