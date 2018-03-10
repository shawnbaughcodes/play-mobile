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

const SinglePost = () => (
    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10, flex: 1 }}>
        <Content style={{ marginBottom: 10 }}>
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAkIAAAAJGU3NTQ5YWQyLTIxZDQtNDUwZi1iMWQxLTZiOGNlOTA4YzZhMA.jpg' }} />
                        <Body>
                            <Text>{this.props.firstname} {this.props.lastname}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text style={{ paddingBottom: 20, width: 350 }}>
                            {this.props.post}
                        </Text>
                        <Image
                            source={require('../assets/PlayPostHere.png')}
                            style={{ height: 200, width: 350, flex: 1 }}
                        />
                    </Body>
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="ios-add-circle" />
                                <Text>Like</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                            <Icon active name="ios-people" />
                            <Text>Comment</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon active name="ios-people" />
                            <Text>Share</Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        </Content>
    </View>
);
export default SinglePost;
