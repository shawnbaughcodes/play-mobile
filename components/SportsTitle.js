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

const SportsTitle = () => (
    <Wrapper>
        <SportsTitleText>Pick Your Sports</SportsTitleText>
        <TouchableOpacity>
            <UserSportsText>Sports: 3</UserSportsText>
        </TouchableOpacity>
        <TouchableOpacity>
            <UserSportsText>Teams: 6</UserSportsText>
        </TouchableOpacity>
    </Wrapper>
);

export default SportsTitle;
