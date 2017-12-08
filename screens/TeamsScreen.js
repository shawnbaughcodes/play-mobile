import React, { Component } from 'react';
import { View, Text } from 'react-native';

class TeamsScreen extends Component {
    render() {
        return (
            <View style={styles.teamsStyle}>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
                <Text>Teams Screen</Text>
            </View>
        );
    }
}
const styles = {
    teamsStyle: {
        flex: 1,
        backgroundColor: '#333'
    }
};
export default TeamsScreen;
