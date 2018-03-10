import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

const SportsOption = () => (
    <View style={styles.containerStyle}>
        <View style={{ justifyContent: 'center' }}>
            <Icon active style={styles.iconStyle} name="ios-add-circle" />
            <Text style={styles.textStyle}>{this.props.sport}</Text>
        </View>
    </View>
);

const styles = {
    containerStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#A0C1D1',
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 10,
        marginTop: 20
    },
    textStyle: {
        textAlign: 'center',
        fontSize: 25,
    },
    iconStyle: {
        textAlign: 'center',
        fontSize: 50
    }
};
export default SportsOption;
