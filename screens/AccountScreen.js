import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Avatar } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';
import AccountSelection from '../components/AccountSelection'

const SCREEN_WIDTH = Dimensions.get('window').width;
class AccountScreen extends Component {
    componentWillMount() {
        this.props.getUserData();
        console.log(this.props);
    }
    render() {
        return (
            <View>
                <View style={styles.userHeadStyle}>
                    <Avatar
                        large
                        rounded
                        source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg' }}
                        style={{ width: 100, height: 100 }}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.userNameText}>
                            {this.props.fname} {this.props.lname}
                        </Text>
                        <Text style={styles.epText}>Edit Profile</Text>
                    </View>
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
        backgroundColor: '#F3FFF4',
        paddingTop: 35,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 10
    },
    userNameText: {
        fontWeight: 'bold',
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 5
    },
    epText: {
        marginLeft: 10,
        marginTop: 5,
        paddingTop: 3,
        paddingBottom: 3,
        backgroundColor: 'white',
        color: '#333',
        textAlign: 'center',
        borderRadius: 10,
        fontSize: 20
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
