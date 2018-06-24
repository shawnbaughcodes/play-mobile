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
    // this.props.onGetUserSports();
  }
  renderAddSportButton = () => {};
  renderRemoveSportButton = () => {};
  render() {
    const {
      sports,
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
    console.log(this.props);

    const userSportsValues =
      user.userSports === null ? [] : Object.values(user.userSports);
    const userSportsKeys =
      user.userSports === null ? [] : Object.keys(user.userSports);
    const userSportsIndex = sports.map(sport => sport.sport);

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Header onOpenAccountModal={onOpenAccountModal} screenName="Sports" />
        <SportsTitle
          sports={user.userSports !== null && user.userSports}
          onOpenUserSportsModal={onOpenUserSportsModal}
        />
        <ScrollView>
          {sports.map(sport => (
            <TouchableOpacity
              key={sport.name}
              onPress={() => onUpdateUserSports(sport.name)}
            >
              <SportsOption
                key={sport.name}
                sport={sport.name}
                selected={userSportsIndex.includes(sport.name)}
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
            userSports={user.userSports}
            userSportsValues={userSportsValues}
            userSportsKeys={userSportsKeys}
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
