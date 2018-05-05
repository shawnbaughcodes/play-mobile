import React from 'react';
import { Image, View, Button, Text, Dimensions, TouchableOpacity } from 'react-native';
import {
    Container,
    Header,
    Content,
    Icon,
    Left,
    Body,
} from 'native-base';

import TeamCardHeader from './TeamCardHeader';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const TeamCard = (props) => (
    <View style={styles.teamCardView}>
        <Image
            source={require('../assets/Team.png')}
            style={styles.teamImageStyle}
        />
        <Text style={styles.teamNameText}>{props.teamname}</Text>
        <TouchableOpacity onPress={props.joinTeam}><Text style={styles.buttonStyle}>Join Team</Text></TouchableOpacity>
    </View>
);

styles = {
    teamCardView: {
        marginLeft: 10,
        marginRight: 10,
        height: 220,
        marginBottom: 10,
        marginTop: 10,
    },
    teamImageStyle: {
        borderRadius: 20,
        width: null,
        flex: 1,
    },
    teamNameText: {
        textAlign: 'center',
        position: 'absolute',
        top: SCREEN_HEIGHT / 10,
        left: SCREEN_WIDTH / 4,
        fontWeight: 'bold',
        fontSize: 30,
    },
    buttonStyle: {
        alignItems: 'center',
        position: 'absolute',
        top: SCREEN_HEIGHT / 5,
        left: SCREEN_WIDTH / 3,
        fontWeight: 'bold',
        fontSize: 20,
    }
}
export default TeamCard;
