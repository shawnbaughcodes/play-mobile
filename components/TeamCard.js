import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const TeamCard = props => {
  return (
    <TouchableOpacity onPress={props.joinTeam}>
      <View style={styles.teamCardView}>
        <Text style={styles.teamNameText}>{props.teamname}</Text>
        <Text style={styles.buttonStyle}>Join Team</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  teamCardView: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 0.5
  },
  teamNameText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 10
  },
  buttonStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 5,
    borderWidth: 0.5,
    padding: 5
  }
};
export default TeamCard;
