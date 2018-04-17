import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const AccountSelection = (props) => (
  <View style={styles.containerStyle}>
    <Text
      style={{
        fontSize: 30,
        textAlign: 'center',
        color: 'black',
      }}
    >
      {props.title}
    </Text>
  </View>
);

const styles = {
  containerStyle: {
    height: 40,
    marginTop: 2,
    marginBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor: 'black',
  }
};
export default AccountSelection;
