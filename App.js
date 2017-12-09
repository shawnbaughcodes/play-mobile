import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';

import store from './store';

import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import SportsScreen from './screens/SportsScreen';
import TeamsScreen from './screens/TeamsScreen';
import NewsScreen from './screens/NewsScreen';
import AccountScreen from './screens/AccountScreen';

export default class App extends React.Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDBjZTqjTExI7yXMjQciVnY2_eOE98UISs',
            authDomain: 'play-1dd07.firebaseapp.com',
            databaseURL: 'https://play-1dd07.firebaseio.com',
            projectId: 'play-1dd07',
            storageBucket: 'play-1dd07.appspot.com',
            messagingSenderId: '750248400131'
};
firebase.initializeApp(config);
    }
    render() {
        const RootNavigator = TabNavigator({
            welcome: { screen: WelcomeScreen },
            stack: {
                screen: StackNavigator({
                    main: {
                        screen: TabNavigator({
                            home: {
                                screen: HomeScreen,
                                navigationOptions: () => ({
                                    tabBarIcon: ({ tintColor }) => (
                                        <Image
                                            source={require('./assets/icons/home.png')}
                                            style={[styles.icon, { tintColor }]}
                                        />
                                    )
                                })
                            },
                            sports: {
                                screen: SportsScreen,
                                navigationOptions: () => ({
                                    tabBarIcon: ({ tintColor }) => (
                                        <Image
                                            source={require('./assets/icons/team.png')}
                                            style={[styles.icon, { tintColor }]}
                                        />
                                    )
                                })
                             },
                            teams: {
                                screen: TeamsScreen,
                                navigationOptions: () => ({
                                    tabBarIcon: ({ tintColor }) => (
                                        <Image
                                            source={require('./assets/icons/tick-inside-circle.png')}
                                            style={[styles.icon, { tintColor }]}
                                        />
                                    )
                                })
                             },
                            news: {
                                screen: NewsScreen,
                                navigationOptions: () => ({
                                    tabBarIcon: ({ tintColor }) => (
                                        <Image
                                            source={require('./assets/icons/newspaper.png')}
                                            style={[styles.icon, { tintColor }]}
                                        />
                                    )
                                })
                             },
                            account: {
                                screen: AccountScreen,
                                navigationOptions: () => ({
                                    tabBarIcon: ({ tintColor }) => (
                                        <Image
                                            source={require('./assets/icons/avatar.png')}
                                            style={[styles.icon, { tintColor }]}
                                        />
                                    )
                                })
                             },
                        }, {
                            tabBarPosition: 'bottom',
                            swipeEnabled: false,
                            lazy: true,
                            tabBarOptions: {
                                activeTintColor: '#4CE0D2',
                                showLabel: false,
                                style: {
                                    backgroundColor: '#333'
                                },
                            }
                        })
                    }
                }, {
                    headerMode: 'screen',
                    mode: 'card'
                })
            },
        }, {
            navigationOptions: {
                tabBarVisible: true
            },
            lazy: true
        }
    );

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RootNavigator />
            </View>
        </Provider>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center'
    },
    icon: {
        width: 30,
        height: 30
    }
});
