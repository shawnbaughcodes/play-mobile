import React, { Component } from 'react';
import { Image, View } from 'react-native';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Button,
    Icon,
    Left,
    Body,
    Right
} from 'native-base';

const TeamCard = () => (
    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
        <Content style={{ marginBottom: 10 }}>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg' }} />
                        <Body>
                            <Text>{this.props.teamname}</Text>
                            <Text note>{this.props.teamlead}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image
                        source={require('../assets/Team.png')}
                        style={{ height: 200, width: null, flex: 1 }}
                    />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="ios-add-circle" />
                                <Text>Join Team </Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon active name="ios-people" />
                            <Text>{this.props.teammates} Members</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    </View>
);
export default TeamCard;
