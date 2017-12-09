import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AuthScreen from '../screens/AuthScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {
    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <AuthScreen />
            );
        }
    }
    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View
                key={slide.text}
                style={[styles.slideStyle, { backgroundColor: slide.color }]}>
                        <Text style={styles.textStyle}>{slide.text}</Text>
                        {this.renderLastSlide(index)}
                </View>
            );
        });
    }
    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    iconStyle: {
        paddingLeft: 100,
        marginRight: 100
    }
};
export default Slides;
