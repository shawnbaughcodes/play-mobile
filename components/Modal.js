import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Modal } from 'react-native';
import { Button } from 'react-native-elements';

class AnyModal extends Component {
    state = {
        isModalVisible: false,
    };
    toggleModal() {
        this.props.isVisible = !isVisible;
    }
    render() {
        const { children, isVisible } = this.props;
        return (
            <View>
                <Modal isVisible={isVisible} animationType="slide" onRequestClose={() => { }}>
                    <View>
                        {children}
                    </View>
                </Modal>
            </View >
        );
    }
}

export default AnyModal;
