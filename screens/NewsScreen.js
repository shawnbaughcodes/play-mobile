import React, { Component } from 'react';
import { ScrollView, Modal, StatusBar, Text } from 'react-native';
import { Container, Header, Body, Title, Left, Right } from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions';

import NewsButton from '../components/NewsButton';

class NewsScreen extends Component {
    state = {
        isModalVisible: false
    }
    componentWillMount() {
        console.log(this.props);
        console.log(this.props.news);
    }
    showFootballNews = () => {
        console.log('Pressed!!!');
        this.setState({ isModalVisible: true });
        return (
            <Modal
                style={{ flex: 1, backgroundColor: 'white' }}
                animationType='slide'
                presentationStyle='fullScreen'
                visible
            >
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
                <Text>YOOOOOOOOOO</Text>
            </Modal>
        );
    }
    render() {
        return (
            <Container style={styles.newsStyle}>
                <StatusBar
                    animated
                    hidden
                />
                <Header style={styles.headerStyle}>
                    <Left />
                    <Body>
                        <Title style={{ color: 'white' }}>News</Title>
                    </Body>
                    <Right />
                </Header>
                <ScrollView style={{ marginTop: 10 }}>
                    <NewsButton
                        title='Football'
                        onPress={this.showFootballNews}
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
    },
    headerStyle: {
        backgroundColor: 'black',
        opacity: 0.3
    }
};

const mapStateToProps = ({ news }) => {
    if (news.news !== undefined) {
        return {
            news: news.news
        };
    }
    return {};
};
export default connect(mapStateToProps, actions)(NewsScreen);
