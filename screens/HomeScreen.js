import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
    state = {
        isModalVisible: false,
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    render() {
        return (
            <View style={styles.homeStyle}>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

const styles = {
    homeStyle: {
        flex: 1,
        backgroundColor: '#333'
    }
};
export default HomeScreen;
