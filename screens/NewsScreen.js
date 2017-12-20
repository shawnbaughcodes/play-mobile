import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Container, Header, Body, Title } from 'native-base';

import NewsButton from '../components/NewsButton';

const SCREEN_WIDTH = Dimensions.get('window').width;
class NewsScreen extends Component {

    render() {
        return (
            <Container style={styles.newsStyle}>
                <Header style={styles.headerStyle}>
                    <Body>
                        <Title style={{ color: 'white' }}>News</Title>
                    </Body>
                </Header>
                <ScrollView style={{ marginTop: 10 }}>
                    <NewsButton
                        title='Football'
                    />
                    <NewsButton
                        title='Basketball'
                    />
                    <NewsButton
                        title='Baseball'
                    />
                    <NewsButton
                        title='Soccer'
                    />
                    <NewsButton
                        title='Tennis'
                    />
                    <NewsButton
                        title='Volleyball'
                    />
                    <NewsButton
                        title='Golf'
                    />
                </ScrollView>
            </Container>
        );
    }
}
const styles = {
    newsStyle: {
        flex: 1,
        backgroundColor: '#333'
    },
    headerStyle: {
        backgroundColor: 'black',
        opacity: 0.3
    }
};
export default NewsScreen;
