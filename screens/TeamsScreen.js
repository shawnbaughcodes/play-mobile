import React, { Component } from 'react';
import { View, ScrollView, Picker, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { Icon, FormLabel, FormInput, FormValidationMessage, Button, List, ListItem, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import CreateTeamButton from '../components/CreateTeamButton';
import HeaderComp from '../components/HeaderComp';
import TeamCard from '../components/TeamCard';

import * as actions from 'play/actions';

class TeamsScreen extends Component {
    state = {
        isModalVisible: false,
        sports: [],
        friends: []
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    componentWillMount = () => {
        this.props.getAllSports();
        this.props.getUserFriends();
    };
    componentWillReceiveProps = (nextProps) => {
        this.setState({ sports: nextProps.sports, friends: nextProps.friends })
        console.log(nextProps);
    };


    render() {

        const joinTeam = () => {
            console.log('JOIN!');
        }

        return (
            <View style={styles.teamsStyle}>
                <HeaderComp />
                <CreateTeamButton showModal={this._showModal} />
                <ScrollView>
                    <TeamCard
                        teamname='Team Name'
                        teamlead='Team Lead'
                        joinTeam={() => joinTeam()}
                    />
                    <TeamCard
                        teamname='Team Name'
                        teamlead='Team Lead'
                    />
                    <TeamCard
                        teamname='Team Name'
                        teamlead='Team Lead'
                    />
                </ScrollView>
                <Modal style={{ margin: 0 }} isVisible={this.state.isModalVisible}>
                    <ScrollView
                        style={{
                            flex: 1,
                            backgroundColor: 'white',
                            paddingTop: 70,
                        }}>
                        <FormLabel>Team Name</FormLabel>
                        <FormInput
                            value={this.props.email}
                            placeholder="Slayer"
                            onChangeText={this.onEmailChange} />
                        <FormLabel>Team Lead</FormLabel>
                        <FormInput
                            secureTextEntry
                            value={this.props.password}
                            placeholder="Billy Bob"
                            onChangeText={this.onPasswordChange} />
                        <FormLabel>Sport</FormLabel>
                        <List containerStyle={{ height: 150, marginLeft: 20, marginRight: 20 }}>
                            <ScrollView>
                                {this.state.sports !== [] && this.state.sports.map((sport) => (
                                    <ListItem title={sport} key={sport}>
                                        <CheckBox
                                            key={sport}
                                            right
                                            title='Add'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                        // checked
                                        />
                                    </ListItem>
                                ))}
                            </ScrollView>
                        </List>
                        <FormLabel>Teammates</FormLabel>
                        <List containerStyle={{ height: 150, marginLeft: 20, marginRight: 20 }}>
                            <ScrollView>
                                {this.state.friends !== [] && this.state.friends.map((friend) => {
                                    <ListItem title={`${friend.fName} ${friend.lName}`}>
                                        <CheckBox
                                            right
                                            title='Add'
                                            checkedIcon='dot-circle-o'
                                            uncheckedIcon='circle-o'
                                        // checked
                                        />
                                    </ListItem>
                                })}
                            </ScrollView>
                        </List>
                        <Button
                            title="Create Team"
                            onPress={() => console.log('CREATING')
                            }
                            style={{
                                marginBottom: 20,
                                marginTop: 10
                            }} />
                        <Button title="Cancel" onPress={this._hideModal} />
                    </ScrollView>
                </Modal>
            </View>

        );
    }
}
const styles = {
    teamsStyle: {
        flex: 1,
    }
};

const mapStateToProps = (state) => {
    console.log(state);

    return { sports: state.sports, friends: state.user.friends };
}
export default connect(mapStateToProps, actions)(TeamsScreen);
