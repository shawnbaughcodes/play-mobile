import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
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
                    <Text>User Name</Text>
                </View>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
                <Text>Account Screen</Text>
            </ScrollView>
        );
    }
}
const styles = {
    userHeadStyle: {
        flexDirection: 'row',
        backgroundColor: '#FFFFF2',
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10
    }
};
export default AccountScreen;
