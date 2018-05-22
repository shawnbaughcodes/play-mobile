import React from 'react';
import Expo from 'expo';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Icon } from 'native-base';

import store from './store';
const { apiKey, db, bucket, id, domain, messaging } = require('./firebase-key');

import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreenContainer from './containers/HomeScreenContainer';
import SportsScreen from './screens/SportsScreen';
import TeamsScreen from './screens/TeamsScreen';
import NewsScreen from './screens/NewsScreen';

export default class App extends React.Component {
  async componentWillMount() {
    const config = firebase.initializeApp({
      apiKey: apiKey,
      authDomain: domain,
      databaseURL: db,
      projectId: id,
      storageBucket: bucket,
      messagingSenderId: messaging
    });
  }
  render() {
    const RootNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: {
          screen: AuthScreen
        },
        main: {
          screen: TabNavigator(
            {
              home: {
                screen: HomeScreenContainer,
                navigationOptions: () => ({
                  title: 'Home',
                  headerBackTitle: null,
                  headerLeft: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-menu-outline"
                        android="md-menu"
                        style={styles.hamburgerStyles}
                      />
                    </TouchableOpacity>
                  ),
                  headerRight: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-search-outline"
                        android="md-search"
                        style={styles.chatBubbles}
                      />
                    </TouchableOpacity>
                  ),
                  tabBarIcon: ({ tintColor }) => (
                    <Image
                      source={require('./assets/icons/home.png')}
                      style={[
                        styles.icon,
                        {
                          tintColor
                        }
                      ]}
                    />
                  )
                })
              },
              sports: {
                screen: SportsScreen,
                navigationOptions: () => ({
                  title: 'Sports',
                  headerBackTitle: null,
                  headerLeft: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-menu-outline"
                        android="md-menu"
                        style={styles.hamburgerStyles}
                      />
                    </TouchableOpacity>
                  ),
                  headerRight: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-search-outline"
                        android="md-search"
                        style={styles.chatBubbles}
                      />
                    </TouchableOpacity>
                  ),
                  tabBarIcon: ({ tintColor }) => (
                    <Image
                      source={require('./assets/icons/team.png')}
                      style={[
                        styles.icon,
                        {
                          tintColor
                        }
                      ]}
                    />
                  )
                })
              },
              teams: {
                screen: TeamsScreen,
                navigationOptions: () => ({
                  title: 'Teams',
                  headerBackTitle: null,
                  headerLeft: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-menu-outline"
                        android="md-menu"
                        style={styles.hamburgerStyles}
                      />
                    </TouchableOpacity>
                  ),
                  headerRight: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-search-outline"
                        android="md-search"
                        style={styles.chatBubbles}
                      />
                    </TouchableOpacity>
                  ),
                  tabBarIcon: ({ tintColor }) => (
                    <Image
                      source={require('./assets/icons/tick-inside-circle.png')}
                      style={[
                        styles.icon,
                        {
                          tintColor
                        }
                      ]}
                    />
                  )
                })
              },
              news: {
                screen: NewsScreen,
                navigationOptions: () => ({
                  title: 'News',
                  headerBackTitle: null,
                  headerLeft: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-menu-outline"
                        android="md-menu"
                        style={styles.hamburgerStyles}
                      />
                    </TouchableOpacity>
                  ),
                  headerRight: (
                    <TouchableOpacity>
                      <Icon
                        ios="ios-search-outline"
                        android="md-search"
                        style={styles.chatBubbles}
                      />
                    </TouchableOpacity>
                  ),
                  tabBarIcon: ({ tintColor }) => (
                    <Image
                      source={require('./assets/icons/newspaper.png')}
                      style={[
                        styles.icon,
                        {
                          tintColor
                        }
                      ]}
                    />
                  ),
                  title: 'News'
                })
              }
            },
            {
              tabBarPosition: 'bottom',
              swipeEnabled: true,
              animationEnabled: true,
              lazy: true,
              tabBarOptions: {
                backBehavior: 'none',
                activeTintColor: '#4CE0D2',
                showLabel: true
              }
            }
          )
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
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
    justifyContent: 'center'
  },
  icon: {
    width: 30,
    height: 30
  },
  hamburgerStyles: {
    fontSize: 30,
    marginLeft: 20
  },
  chatBubbles: {
    fontSize: 30,
    marginRight: 20
  }
});
