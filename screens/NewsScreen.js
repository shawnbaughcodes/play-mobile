import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NewsScreen extends Component {
    
    render() {
        return (
            <View style={styles.newsStyle}>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
                <Text style={{ color: 'white' }}>News Screen</Text>
            </View>
        );
    }
}
const styles = {
    newsStyle: {
        flex: 1,
        backgroundColor: '#333'
    }
};
export default NewsScreen;
