import React from 'react';
import { View, Text } from 'react-native';
import { CardItem, Left, Body } from 'native-base';

const TeamCardHeader = (props) => (
    <View>
        <CardItem>
            <Left>
                <Body>
                    <Text>{props.teamname}</Text>
                    <Text note>{props.teamlead}</Text>
                </Body>
            </Left>
        </CardItem>
    </View>
);

export default TeamCardHeader;
