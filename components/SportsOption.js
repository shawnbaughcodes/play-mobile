import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'native-base';
import styled from 'styled-components';

import { sportsOptionContainer, sportsInnerContainer } from './styles/sportsStyles';

const Wrapper = styled.View`
    ${sportsOptionContainer}
`;
const InnerWrapper = styled.View`
    ${sportsInnerContainer}
`;

const SportsOption = (props) => (
    <Wrapper>
        <Icon active style={styles.iconStyle} name="ios-add-circle" />
        <Text style={styles.textStyle}>{props.sport}</Text>
    </Wrapper>
);

const styles = {
    textStyle: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    iconStyle: {
        textAlign: 'center',
        fontSize: 40,
        color: 'white',
    }
};
export default SportsOption;
