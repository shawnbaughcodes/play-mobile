import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const CreateTeamButton = (props) => (
    <TouchableOpacity onPress={props.showModal}>
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}>Create Team</Text>
        </View>
    </TouchableOpacity>
);

const styles = {
    containerStyle: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'black',
        borderRadius: 50,
        marginTop: 20
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        paddingTop: 10,
        paddingBottom: 10,

    }
};
export default CreateTeamButton;
