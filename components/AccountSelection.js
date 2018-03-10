import React from 'react';
import { View, Text, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const AccountSelection = (props) => (
  <View style={styles.containerStyle}>
  <Text
  style={{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  }}
  >
  {props.title}
  </Text>
  </View>
);

const styles = {
    containerStyle: {
        flex: 1,
        height: 100,
        backgroundColor: 'black',
        justifyContent: 'center',
        width: SCREEN_WIDTH,
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 30
    }
};
export default AccountSelection;
