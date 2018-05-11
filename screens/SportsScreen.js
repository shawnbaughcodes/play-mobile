import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as actions from '../actions';

import SportsOption from '../components/SportsOption';
import HeaderComp from '../components/HeaderComp';
import SportsTitle from '../components/SportsTitle';
import { sportsScrollWrapper } from '../components/styles/sportsStyles';

const SportsScrollWrapper = styled.View`
    ${sportsScrollWrapper}
`;

class SportsScreen extends Component {
	state = { sports: [], userSports: [] }
	componentDidMount() {
		this.props.getAllSports();
		this.props.getUserSports();
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ sports: nextProps.sports })
		this.setState({ userSports: nextProps.user.userSports })
	}

	onUpdateSportsData = (sport) => {
		this.props.addSportsData(sport)
	}

	render() {

		const { sports, userSports } = this.state;
		return (
			<View style={{ flex: 1 }}>
				<SportsTitle sports={userSports !== null && userSports} />
				<ScrollView>
					{sports === [] ? (
						<TouchableOpacity key="TouchSportsOption">
							<SportsOption
								key="SportsOption"
								sport="LOADING..."
							/>
						</TouchableOpacity>
					) : (
							sports.map((sport) => (
								<TouchableOpacity key={sport} onPress={() => this.onUpdateSportsData(sport)}>
									{userSports && <SportsOption
										key={sport}
										sport={sport}
									/>}
								</TouchableOpacity>
							))
						)}
				</ScrollView>
			</View>
		);
	}
}

const mapStateToProps = state => {
	console.log(state);

	return {
		sports: state.sports,
		user: state.user,
	};
}

export default connect(mapStateToProps, actions)(SportsScreen);
