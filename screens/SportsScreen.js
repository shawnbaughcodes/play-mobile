import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SportsScreen extends Component {
    render() {
        return (
            <View style={styles.sportsStyle}>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
                <Text>Sports Screen</Text>
            </View>
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
