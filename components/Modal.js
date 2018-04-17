import React, { Component } from 'react';
import { View, Text, Modal, TouchableHighlight } from 'react-native';

class AnyModal extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        console.log('HIT!');
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <View style={{ marginTop: 22 }}>
                <Modal animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}
                >
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <Text>Hello World!</Text>
                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}
                            >
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal >
            </View>
        );
    }
}

export default AnyModal;
