import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';

import CardUserInfo from './CardUserInfo';
import CardUserPost from './CardUserPost';
import CardUserPostOptions from './CardUserPostOptions';
import { wrapper } from './styles/postCardStyles';

const Wrapper = styled.View`
    ${wrapper}
`;
const SinglePost = (props) => (
    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10, flex: 1 }}>
        <Wrapper>
            <CardUserInfo
                firstname={props.firstname}
                lastname={props.lastname}
            />
            <CardUserPost post={props.post} />
            <CardUserPostOptions />
        </Wrapper>
    </View>
);
export default SinglePost;
