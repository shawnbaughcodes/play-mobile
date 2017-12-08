import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const ImagePath = '../assets/';
const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {

    renderLastSlide(index) {
        if (index === this.props.data.length - 1) {
            return (
                <View>
                    <SocialIcon
                        button
                        raised
                        type='facebook'
                        light
                        iconSize={25}
                        iconStyle={styles.iconStyle}
                    />
                    <SocialIcon
                        raised
                        button
                        type='google-plus-official'
                        light
                        iconSize={25}
                        iconStyle={styles.iconStyle}
                    />
                    <SocialIcon
                        button
                        raised
                        type='twitter'
                        light
                        iconSize={25}
                        iconStyle={styles.iconStyle}
                    />
                </View>
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
        marginLeft: 100,
        marginRight: 100
    }
};
export default Slides;
