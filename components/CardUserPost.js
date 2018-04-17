import React from 'react';
import { Image } from 'react-native';
// import { CardItem, Body } from 'native-base';
import styled from 'styled-components';
import { postWrapper, postBody, postText } from './styles/postCardStyles';

const Wrapper = styled.View`
    ${postWrapper}
`;
const Body = styled.View`
    ${postBody}
`;
const Text = styled.Text`
    ${postText}
`;

const CardUserPost = (props) => (
    <Wrapper>
        <Body>
            <Image
                source={require('../assets/PlayPostHere.png')}
                style={{ height: 200, width: '100%', flex: 1 }}
            />
            <Text style={{ paddingTop: 10, paddingBottom: 10, width: 350 }}>
                {props.post}
            </Text>
        </Body>
    </Wrapper>
);

export default CardUserPost;
