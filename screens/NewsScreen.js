import React, { Component } from 'react';
import { ScrollView, Modal, Text } from 'react-native';
import { Container, Header, Body, Title, Left, Right } from 'native-base';
import { connect } from 'react-redux';
const API = require('../api-key');

import * as actions from '../actions';

import NewsButton from '../components/NewsButton';
import HeaderComp from '../components/HeaderComp';

const mapStateToProps = ({ news }) => {
    return {
        news
    };
};

class NewsScreen extends Component {
    state = {
        isModalVisible: false,
        articles: [],
    }
    componentWillMount() {
        this.props.getSportsData();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ articles: nextProps.news.news.articles })
    }

    render() {
        return (
            <Container style={styles.newsStyle}>
                <HeaderComp />
                <ScrollView style={{ marginTop: 10 }}>
                    {this.state.articles.map((article) => (
                        <NewsButton
                            key={article.publishedAt}
                            title={article.title}
                            description={article.description}
                            url={article.url}
                            image={article.urlToImage}
                        />
                    ))}
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

export default connect(mapStateToProps, actions)(NewsScreen);
