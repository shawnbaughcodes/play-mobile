import React, { Component } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
import CreateTeamButton from '../components/CreateTeamButton';
import HeaderComp from '../components/HeaderComp';
import TeamCard from '../components/TeamCard';

class TeamsScreen extends Component {
    render() {
        return (
            <View style={styles.teamsStyle}>
                <HeaderComp />
                <CreateTeamButton />
                <ScrollView>
                    <TeamCard
                        teamname='Team Name'
                        teamlead='Team Lead'
                    />
                    <TeamCard
                        teamname='Team Name'
                        teamlead='Team Lead'
                    />
                    <TeamCard
                        teamname='Team Name'
                        teamlead='Team Lead'
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
            </View>

        );
    }
}
const styles = {
    teamsStyle: {
        flex: 1,
    }
};
export default TeamsScreen;
