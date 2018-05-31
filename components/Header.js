import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { Icon } from 'react-native-elements';

const Header = props => {
  const { onOpenAccountModal, screenName } = props;
  return (
    <View style={styles.headerStyles}>
      <TouchableOpacity onPress={props.onOpenAccountModal}>
        <Icon name="menu" size={25} style={styles.hamburgerStyles} />
      </TouchableOpacity>
      <Text style={styles.headerTextStyles}>{screenName}</Text>
      <TouchableOpacity>
        <Icon name="search" size={25} style={styles.hamburgerStyles} />
      </TouchableOpacity>
    </View>
  );
};
const styles = {
  headerStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10
  },
  headerTextStyles: {
    fontSize: 20
  }
};

export default Header;
