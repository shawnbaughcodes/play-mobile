import React, { Component } from 'react';
import { ScrollView, Modal, Text, WebView } from 'react-native';
import { Container, Header, Body, Title, Left, Right } from 'native-base';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
const API = require('../api-key');

import * as actions from '../actions';

import NewsButton from '../components/NewsButton';

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
			<SafeAreaView style={styles.newsStyle}>
				<ScrollView style={{ marginTop: 10 }}>
					{this.state.articles.map((article) => (
						<NewsButton
							key={article.publishedAt}
							title={article.title}
							description={article.description}
							image={article.urlToImage}
							url={article.url}
						/>
					))}
				</ScrollView>
			</SafeAreaView>
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
