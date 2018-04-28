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
        console.log(nextProps);

        this.setState({ sports: nextProps.sports })
        this.setState({ userSports: this.nextProps.userSports })

    }

    onUpdateSportsData = (sport) => {
        this.props.addSportsData(sport)
    }

    render() {
        console.log(this.props.user);

        const { sports, userSports } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <HeaderComp />
                <SportsTitle sports={sports} />
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
                                    <SportsOption
                                        key={sport}
                                        sport={sport}
                                    />
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
        user: {
            userSports: state.user.userSports,
            teams: []
        }
    };
}

export default connect(mapStateToProps, actions)(SportsScreen);
