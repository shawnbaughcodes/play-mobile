import React from 'react';
import { Text } from 'react-native';
import { Right, Left, Body, Thumbnail } from 'native-base';
import styled from 'styled-components';

import { infoWrapper, userName } from './styles/postCardStyles';

const InfoWrapper = styled.View`
    ${infoWrapper}
`;
const UserName = styled.Text`
    ${userName}
`;

const CardUserInfo = (props) => (
    <InfoWrapper>
        <Thumbnail source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg' }} />
        <UserName>
            {props.firstname} {props.lastname}
        </UserName>
    </InfoWrapper>
);

export default CardUserInfo;
