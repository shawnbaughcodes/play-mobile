import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

const SportsTitle = props => {
  const { sports, onOpenUserSportsModal } = props;
  const userSportsCount = Object.keys(sports).length;
  return (
    <View style={styles.wrapperStyles}>
      <Text style={styles.sportsTitleText}>Pick Your Sports</Text>
      <TouchableOpacity onPress={onOpenUserSportsModal}>
        <Text style={styles.userSportsText}>My Sports: {userSportsCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.userSportsText}>My Teams: 6</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  wrapperStyles: {
    height: '30%',
    opacity: 0.8,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  sportsTitleText: {
    fontSize: 45,
    fontWeight: '800',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15
  },
  userSportsText: {
    fontSize: 25,
    fontWeight: '200',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15
  }
};

export default SportsTitle;
