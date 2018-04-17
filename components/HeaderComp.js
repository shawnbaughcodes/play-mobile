import React from 'react';
import { TouchableOpacity, Text, Dimensions, View } from 'react-native';
import { Left, Body, Right, Icon } from 'native-base';

import AnyModal from './Modal';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const IPHONE_X = SCREEN_HEIGHT === 812;

const HeaderComp = (props) => (
    <View style={styles.wrapperStyles}>
        <Left>
            <TouchableOpacity>
                <Icon style={{
                    color: 'black',
                }} name="ios-menu" />
            </TouchableOpacity>
        </Left>
        <Body>
            <Text style={styles.headerText}>Play</Text>
        </Body>
        <Right>
            <TouchableOpacity onPress={() => <AnyModal />}>
                <Icon style={{
                    color: 'black',
                }} name="ios-chatboxes-outline" />
            </TouchableOpacity>
        </Right>
    </View>
);

const styles = {
    wrapperStyles: {
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#EFF1F3',
        height: 65,
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        opacity: 0.8,
        shadowColor: 'grey',
        shadowOpacity: 8,
        elevation: 1,
        zIndex: 2,
        flexDirection: 'row',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: !IPHONE_X ? 20 : 50,
        paddingBottom: !IPHONE_X ? 0 : 40,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: IPHONE_X && 25,
    }
}

export default HeaderComp;
