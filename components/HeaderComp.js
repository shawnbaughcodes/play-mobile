import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Left, Body, Right, Icon } from 'native-base';
import styled from 'styled-components';

import { wrapper, headText } from './styles/headerStyles';

const Wrapper = styled.View`
    ${wrapper}
`;
const HeadText = styled.Text`
    ${headText}
`;

const HeaderComp = (props) => (
    <Wrapper>
        <Left>
            <TouchableOpacity>
                <Icon style={{ color: 'black' }} name="ios-menu" />
            </TouchableOpacity>
        </Left>
        <Body>
            <HeadText>Play</HeadText>
        </Body>
        <Right>
            <TouchableOpacity>
                <Icon style={{ color: 'black' }} name="ios-chatboxes-outline" />
            </TouchableOpacity>
        </Right>
    </Wrapper>
);

export default HeaderComp;
