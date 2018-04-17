import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';

import SinglePost from '../components/SinglePost';
import HeaderComp from '../components/HeaderComp';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class HomeScreen extends Component {
    state = {
        isModalVisible: false,
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComp />
                <ScrollView style={{ flex: 1 }}>
                    <SinglePost
                        firstname='Someone'
                        lastname='Superlongname'
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

export default HomeScreen;
