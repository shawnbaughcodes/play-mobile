import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';

import SportsOption from '../components/SportsOption';
import SportsTitle from '../components/SportsTitle';
import AccountModal from '../components/AccountModal';
import Header from '../components/Header';
import UserSportsModal from '../components/UserSportsModal';

class SportsScreen extends Component {
  componentWillMount() {
    this.props.onGetAllSports();
    this.props.onGetUserSports();
  }

  render() {
    const {
      sports,
      userSports,
      onUpdateUserSports,
      onRemoveUserSport,
      accountModalVisible,
      user,
      onCloseModal,
      onSignOut,
      navigation,
      onOpenAccountModal,
      userSportsModalVisible,
      onOpenUserSportsModal
    } = this.props;

    const userSportsValues =
      userSports === null ? [] : Object.values(userSports);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header onOpenAccountModal={onOpenAccountModal} screenName="Home" />
        <SportsTitle
          sports={userSports !== null && userSports}
          onOpenUserSportsModal={onOpenUserSportsModal}
        />
        <ScrollView>
          {sports.map(sport => (
            <TouchableOpacity
              key={sport}
              onPress={
                userSportsValues.includes(sport)
                  ? () => onRemoveUserSport(sport)
                  : () => onUpdateUserSports(sport)
              }
            >
              <SportsOption
                key={sport}
                sport={sport}
                selected={userSportsValues.includes(sport)}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.modalStyles}>
          <AccountModal
            modalVisible={accountModalVisible}
            user={user}
            navigation={navigation}
            onCloseModal={onCloseModal}
            onSignOut={onSignOut}
          />
          <UserSportsModal
            userSportsModalVisible={userSportsModalVisible}
            onCloseModal={onCloseModal}
            userSports={userSports}
            userSportsValues={userSportsValues}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  modalStyles: {
    zIndex: 600,
    height: 0
  }
};
export default SportsScreen;
