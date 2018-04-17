import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AccountSelection from '../components/AccountSelection';
import HeaderComp from '../components/HeaderComp';

const SCREEN_WIDTH = Dimensions.get('window').width;
class AccountScreen extends Component {
    componentWillMount() {
        this.props.getUserData();
        console.log(this.props);
    }
    render() {
        return (
            <View>
                <HeaderComp />
                <View style={styles.userHeadStyle}>
                    <Avatar
                        xlarge
                        rounded
                        source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg' }}
                        style={{ width: 100, height: 100 }}
                    />
                </View>
                <View style={styles.infoStyles}>
                    <Text style={styles.nameStyles}>firstName lastName</Text>
                    <Text style={styles.hometownStyles}>Hometown</Text>
                    <Text style={styles.headlineStyles}>Headline</Text>
                </View>
                <ScrollView style={styles.containerStyle}>
                    <TouchableOpacity>
                        <AccountSelection
                            title='Messages'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AccountSelection
                            title='Teams'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AccountSelection
                            title='Upcoming Games'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AccountSelection
                            title='My Sports'
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AccountSelection
                            style={{ color: 'red' }}
                            title='Sign Out'
                        />
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
        paddingBottom: 25,
    },
    infoStyles: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    nameStyles: {
        textAlign: 'center',
        fontSize: 25,
    },
    hometownStyles: {
        textAlign: 'center',
        fontSize: 13,
        color: 'grey',
    },
    headlineStyles: {
        textAlign: 'center',
        fontSize: 15,
    },
    lasttitleStyle: {
        color: 'red'
    },
    containerStyle: {
        width: SCREEN_WIDTH,
        height: '100%',
        marginTop: 20,
    }
};
const mapStateToProps = ({ user }) => {
    if (user.user !== undefined) {
        return {
            fname: user.user.data.firstname,
            lname: user.user.data.lastname,
            email: user.user.data.email,
        };
    }

    return {};
};

export default connect(mapStateToProps, actions)(AccountScreen);
