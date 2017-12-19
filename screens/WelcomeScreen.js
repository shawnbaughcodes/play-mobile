import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';
import firebase from 'firebase';

import Slides from '../components/Slides';

const ImagePath = '../assets/';

const WELCOME_DATA = [
    { text: 'Page 1', color: '#41D3BD', image: `${ImagePath}1.png` },
    { text: 'Page 2', color: '#41D3BD', image: `${ImagePath}2.png` },
    { text: 'Page 3', color: '#41D3BD', image: `${ImagePath}3.png` },
    { text: 'Page 4', color: '#41D3BD', image: `${ImagePath}4.png` }
];

class WelcomeScreen extends Component {
    state = { tokenFB: null, tokenEM: null }
    async componentWillMount() {
        AsyncStorage.removeItem('email_token')
        const tokenFB = await AsyncStorage.getItem('fb_token');
        const tokenEM = await AsyncStorage.getItem('email_token');
        if (tokenFB || tokenEM) {
            this.props.navigation.navigate('home');
        } else {
            this.setState({ tokenFB: false, tokenEM: false });
        }
    }
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides data={WELCOME_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}
export default WelcomeScreen;
