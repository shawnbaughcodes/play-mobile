import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { sportsViewWrapper, sportsTitleText, userSportsTexts } from './styles/sportsStyles';

const Wrapper = styled.View`
    ${sportsViewWrapper}
`;
const SportsTitleText = styled.Text`
    ${sportsTitleText}
`;
const UserSportsText = styled.Text`
    ${userSportsTexts}
`;

const SportsTitle = (props) => {
    const userSportsCount = Object.keys(props.sports).length;

    return (
        <Wrapper>
            <SportsTitleText>Pick Your Sports</SportsTitleText>
            <TouchableOpacity>
                <UserSportsText>My Sports: {userSportsCount}</UserSportsText>
            </TouchableOpacity>
            <TouchableOpacity>
                <UserSportsText>My Teams: 6</UserSportsText>
            </TouchableOpacity>
        </Wrapper>
    );

}

export default SportsTitle;
