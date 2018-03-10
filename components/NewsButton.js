import React from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;

const NewsButton = (props) => (
    <TouchableOpacity>
        <View style={styles.containerStyle}>
            <Button bordered onPress={props.onPress} style={styles.titleBGStyle}>
                <Text style={styles.textStyle}>{props.title}</Text>
            </Button>
            <View style={styles.imageStyle}>
                {props.image}
            </View>
        </View>
    </TouchableOpacity>
);

const styles = {
    containerStyle: {
        flex: 3,
        flexDirection: 'row',
        height: 140,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#DADFF7',
        borderRadius: 10,
        marginTop: 15
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#232C33'
    },
    titleBGStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        backgroundColor: '#A0C1D1',
        width: 40,
        borderColor: '#B5B2C2',
        borderWidth: 0.7
    },
    imageStyle: {
        flex: 2,
        flexDirection: 'column',
    }
};
export default NewsButton;