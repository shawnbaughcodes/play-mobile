import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const NewsButton = (props) => (
    <TouchableOpacity>
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} />
            <Text>{props.title}</Text>
            <Text>_______________________________________</Text>
            <Text>Press to Read More</Text>
        </View>
    </TouchableOpacity>
);

const styles = {
    containerStyle: {
        flex: 1,
        height: SCREEN_HEIGHT / 3,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#333',
        borderRadius: 10,
        marginTop: 15,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#232C33'
    },
    imageStyle: {
        // width: SCREEN_WIDTH,
        height: 200,
        width: '100%',
    }
};
export default NewsButton;
