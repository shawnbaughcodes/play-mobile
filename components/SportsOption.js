import React from 'react';
import { Text } from 'react-native';
import { Icon } from 'native-base';
import styled from 'styled-components';

import {
  sportsOptionContainer,
  sportsInnerContainer
} from './styles/sportsStyles';

const Wrapper = styled.View`
  ${sportsOptionContainer};
`;
const InnerWrapper = styled.View`
  ${sportsInnerContainer};
`;

const SportsOption = props => {
  const { sport, selected } = props;
  return (
    <Wrapper>
      {selected ? (
        <Icon active style={styles.iconStyleRemove} name="ios-remove-circle" />
      ) : (
        <Icon active style={styles.iconStyleAdd} name="ios-add-circle" />
      )}

      <Text style={styles.textStyle}>{sport}</Text>
    </Wrapper>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white'
  },
  iconStyleAdd: {
    textAlign: 'center',
    fontSize: 40,
    color: 'green'
  },
  iconStyleRemove: {
    textAlign: 'center',
    fontSize: 40,
    color: 'red'
  }
};
export default SportsOption;
