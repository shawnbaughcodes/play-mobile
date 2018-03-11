import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Left, Icon, Body, Right } from 'native-base';
import styled from 'styled-components';
import { optionWrapper, optionButton } from './styles/postCardStyles';

const Wrapper = styled.View`
    ${optionWrapper}
`;
const Button = styled.Text`
    ${optionButton}
`;

const CardUserPostOptions = () => (
    <Wrapper>
        <Left>
            <TouchableOpacity>
                <Button>
                    <Icon active name="ios-thumbs-up" />
                    <Text>Like</Text>
                </Button>
            </TouchableOpacity>
        </Left>
        <Body>
            <TouchableOpacity>
                <Button>
                    <Icon active name="ios-text" />
                    <Text>Comment</Text>
                </Button>
            </TouchableOpacity>
        </Body>
        <Right>
            <TouchableOpacity>
                <Button>
                    <Icon active name="ios-share-alt" />
                    <Text>Share</Text>
                </Button>
            </TouchableOpacity>
        </Right>
    </Wrapper>
);

export default CardUserPostOptions;
