import React from 'react';
import { Text, View, TouchableOpacity, Dimensions } from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const EventTile = props => {
  const { eventTitle, onOpenEventInfoModal } = props;

  return (
    <TouchableOpacity onPress={onOpenEventInfoModal}>
      <View style={styles.cardStyle}>
        <View style={styles.iconWrapper}>
          <Text>Pic</Text>
        </View>
        <Text style={styles.titleStyle}>Event</Text>
        <Text style={styles.dateStyle}>Date</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  cardStyle: {
    backgroundColor: '#EEF0F2',
    width: SCREEN_WIDTH / 2.5,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT / 4,
    borderRadius: 10,
    shadowOffset: { width: 0.5, height: 0 },
    shadowColor: 'grey',
    shadowRadius: 2,
    shadowOpacity: 0.4
  },
  iconWrapper: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 95,
    height: 95,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowOffset: { width: 0.5, height: 5 },
    shadowColor: 'grey',
    shadowRadius: 2,
    shadowOpacity: 0.1
  },
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5
  },
  dateStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'grey'
  }
};

export default EventTile;
