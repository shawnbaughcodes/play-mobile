import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';

class AccountScreen extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.userHeadStyle}>
                    <Avatar
                        large
                        rounded
                        source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg' }}
                        style={{ width: 100, height: 100 }}
                    />
                    <View style={{ marginLeft: 15 }}>
                        <Text style={styles.userNameText}>User Name</Text>
                        <Text style={styles.epText}>Edit Profile</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        paddingBottom: 25,
                        paddingTop: 20
                        }}
                    >
                        Teams
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        paddingBottom: 25,
                        paddingTop: 20
                        }}
                    >
                        Upcoming Games
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        paddingBottom: 25
                        }}
                    >
                        My Sports
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text
                        style={{
                        textAlign: 'center',
                        fontSize: 30,
                        paddingBottom: 25,
                        color: 'red'
                        }}
                    >
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
const styles = {
    userHeadStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFF2',
        paddingTop: 10,
        paddingLeft: 15,
        paddingRight: 10,
        paddingBottom: 10,
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
    }
};
export default AccountScreen;
