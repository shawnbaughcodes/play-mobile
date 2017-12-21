import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { Header, Body, Title, Right, Icon } from 'native-base';

import SinglePost from '../components/SinglePost';

class HomeScreen extends Component {
    state = {
        isModalVisible: false,
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: 'black' }}>
                    <Right>
                        <TouchableOpacity>
                            <Icon style={{ color: 'white' }} name="ios-chatboxes-outline" />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <ScrollView style={styles.homeStyle}>
                    <SinglePost
                        firstname='Nah'
                        lastname='Son'
                        post='This is a post to show I can pass props back to the component carrying this card.'
                    />
                    <SinglePost
                        firstname='Nah'
                        lastname='Son'
                        post='This is a post saying I can do the same thing but better.'
                    />
                    <SinglePost
                        firstname='Nah'
                        lastname='Son'
                        post='This is a post to show I can pass props back to the component carrying this card.'
                    />
                    <SinglePost
                        firstname='Nah'
                        lastname='Son'
                        post='This is a post saying I can do the same thing but better.'
                    />
                    <SinglePost
                        firstname='Nah'
                        lastname='Son'
                        post='This is a post to show I can pass props back to the component carrying this card.'
                    />
                    <SinglePost
                        firstname='Nah'
                        lastname='Son'
                        post='This is a post saying I can do the same thing but better.'
                    />
                </ScrollView>
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
