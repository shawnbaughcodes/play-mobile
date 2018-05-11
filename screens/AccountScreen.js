import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, AsyncStorage } from 'react-native';
import { Avatar } from 'react-native-elements';
import firebase from 'firebase';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AccountSelection from '../components/AccountSelection';
import HeaderComp from '../components/HeaderComp';
import AnyModal from '../components/Modal';

const SCREEN_WIDTH = Dimensions
	.get('window')
	.width;

class AccountScreen extends Component {
	componentWillMount() {
		this
			.props
			.getUserData();
		console.log(this.props);
	}

	onSignOutPressed = async () => {
		AsyncStorage.removeItem('user_id');
		firebase.auth().signOut();
		this.props.navigation.navigate('auth')
	}
	render() {
		const { firstName, lastName, email, isVisible } = this.props;
		return (
			<View>
				<View style={styles.userHeadStyle}>
					<Avatar
						xlarge
						rounded
						source={{
							uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg'
						}}
						style={{
							width: 100,
							height: 100
						}} />
				</View>
				<View style={styles.infoStyles}>
					<Text style={styles.nameStyles}>{`${firstName} ${lastName}`}</Text>
					<Text style={styles.hometownStyles}>Hometown</Text>
					<Text style={styles.headlineStyles}>Headline</Text>
				</View>
				<ScrollView style={styles.containerStyle}>
					<TouchableOpacity>
						<AccountSelection title='Teams' />
					</TouchableOpacity>
					<TouchableOpacity>
						<AccountSelection title='Upcoming Games' />
					</TouchableOpacity>
					<TouchableOpacity>
						<AccountSelection title='My Sports' />
					</TouchableOpacity>
					<TouchableOpacity>
						<AccountSelection
							style={{
								color: 'red'
							}}
							title='Sign Out' />
					</TouchableOpacity>
					<TouchableOpacity onPress={this.props.closeModal}>
						<AccountSelection
							style={{
								color: 'red'
							}}
							title='Close' />
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}
const styles = {
	userHeadStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 25,
		paddingBottom: 25
	},
	infoStyles: {
		flexDirection: 'column',
		justifyContent: 'center',
		marginTop: 10,
		marginBottom: 10
	},
	nameStyles: {
		textAlign: 'center',
		fontSize: 25
	},
	hometownStyles: {
		textAlign: 'center',
		fontSize: 13,
		color: 'grey'
	},
	headlineStyles: {
		textAlign: 'center',
		fontSize: 15
	},
	lasttitleStyle: {
		color: 'red'
	},
	containerStyle: {
		width: SCREEN_WIDTH,
		height: '100%',
		marginTop: 20
	}
};
const mapStateToProps = (state) => {

	return {
		firstName: state.user.firstName,
		lastName: state.user.lastName,
		email: state.user.email
	};

};

export default connect(mapStateToProps, actions)(AccountScreen);
