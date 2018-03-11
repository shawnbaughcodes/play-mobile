import React, { Component } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

import SportsOption from '../components/SportsOption';
import HeaderComp from '../components/HeaderComp';
import SportsTitle from '../components/SportsTitle';
import { sportsScrollWrapper } from '../components/styles/sportsStyles';

const SportsScrollWrapper = styled.View`
    ${sportsScrollWrapper}
`;

class SportsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <HeaderComp />
                <SportsTitle />
                <ScrollView>
                    <TouchableOpacity>
                        <SportsOption
                            sport="Footbal"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SportsOption
                            sport="BasketBall"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SportsOption
                            sport="Baseball"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SportsOption
                            sport="Tennis"
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <SportsOption
                            sport="Golf"
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

export default SportsScreen;
