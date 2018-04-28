import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';
import firebase from 'firebase';

import Slide from '../components/Slides';

const ImagePath = '../assets/';

const WELCOME_DATA = [
    // { text: 'Page 1', color: '#41D3BD', image: `${ImagePath}1.png` },
    // { text: 'Page 2', color: '#41D3BD', image: `${ImagePath}2.png` },
    // { text: 'Page 3', color: '#41D3BD', image: `${ImagePath}3.png` },
    { text: 'Page 4', color: '#41D3BD', image: `${ImagePath}4.png` }
];

class WelcomeScreen extends Component {
    state = { user_id: null }
    async componentWillMount() {
        const user_id = AsyncStorage.getItem('user_id');
        const { currentUser } = firebase.auth();

        if (user_id === this.state.user_id) {
            this.props.navigation.navigate('home');
            this.setState({ user_id: currentUser.uid })
        } else {
            this.setState({ user_id: null });
        }
        console.log(this.state.user_id);

    }
    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slide data={WELCOME_DATA} onComplete={this.onSlidesComplete} />
        );
    }
}
export default WelcomeScreen;
