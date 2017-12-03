import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator} from 'react-navigation';

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';

export default class App extends React.Component {
    render() {
        const RootNavigator = ({
            welcome: { screen: WelcomeScreen },
            auth: { screen: AuthScreen }
        })
    return (
        <View style={styles.container}>
            <RootNavigator />
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
});
