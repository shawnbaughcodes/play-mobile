import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'native-base';

const SportsOption = props => {
  const { sport, selected } = props;
  return (
    <View style={styles.sportsOptionContainer}>
      {selected ? (
        <Icon active style={styles.iconStyleRemove} name="ios-remove-circle" />
      ) : (
        <Icon active style={styles.iconStyleAdd} name="ios-add-circle" />
      )}

      <Text style={styles.textStyle}>{sport}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  iconStyleAdd: {
    textAlign: 'center',
    fontSize: 40,
    color: 'green'
  },
  iconStyleRemove: {
    textAlign: 'center',
    fontSize: 40,
    color: 'red'
  },
  sportsOptionContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#738290',
    height: 100,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginTop: 20
  }
};
export default SportsOption;
