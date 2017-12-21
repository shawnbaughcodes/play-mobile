import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import SportsOption from '../components/SportsOption';

class SportsScreen extends Component {
    render() {
        return (
            <ScrollView style={styles.sportsStyle}>
                <TouchableOpacity>
                    <SportsOption
                        sport="Football"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SportsOption
                        sport="BasketBall"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SportsOption
                        sport="Baseball"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SportsOption
                        sport="Tennis"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SportsOption
                        sport="Golf"
                    />
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
const styles = {
    sportsStyle: {
        flex: 1,
        backgroundColor: '#333'
    }
};
export default SportsScreen;
