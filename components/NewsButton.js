import React from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image, Linking } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const NewsButton = (props) => (
    <View style={styles.containerStyle}>
        <Image style={styles.imageStyle} source={{ uri: props.image }} />
        <Text style={styles.textStyle}>{props.title}</Text>
        <View
            style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                width: '50%',
                // position: 'absolute',
                left: SCREEN_WIDTH / 4,
                paddingTop: 3,
            }}
        />
        <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
            <Text style={styles.readMoreText}>Press to Read More</Text>
        </TouchableOpacity>
    </View>
);

const styles = {
    containerStyle: {
        flex: 1,
        // height: SCREEN_HEIGHT / 3,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        marginTop: 15,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        paddingBottom: 10,
    },
    textStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#232C33'
    },
    readMoreText: {
        fontSize: 15,
        textAlign: 'center',
        color: '#232C33'
    },
    imageStyle: {
        borderRadius: 10,
        height: 200,
        width: '100%',
    }
};
export default NewsButton;
