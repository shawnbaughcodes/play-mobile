import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const ImagePath = '../assets/';

const WELCOME_DATA = [
    { text: 'Page 1', color: '#41D3BD', image: `${ImagePath}1.png` },
    { text: 'Page 2', color: '#41D3BD', image: `${ImagePath}2.png` },
    { text: 'Page 3', color: '#41D3BD', image: `${ImagePath}3.png` },
    { text: 'Page 4', color: '#41D3BD', image: `${ImagePath}4.png` },
    { text: 'Login to PLAY', color: '#41D3BD', image: `${ImagePath}5.png` },
];

class WelcomeScreen extends Component {

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
