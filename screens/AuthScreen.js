import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, AsyncStorage, Text } from 'react-native';
import Modal from 'react-native-modal';
import { Expo } from 'expo';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    state = {
        isModalVisible: false
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

    componentDidMount() {
        AsyncStorage.removeItem('fb_token');
    }
    onEmailBtnPress() {
        return;
    }

    render() {
        return (
            <View>
                <Icon
                    reverse
                    name='facebook-official'
                    type='font-awesome'
                    size={40}
                    iconStyle={styles.iconStyle}
                    onPress={() => this.props.facebookLogin()}
                />
                <Icon
                    reverse
                    type='font-awesome'
                    name='envelope'
                    size={40}
                    iconStyle={styles.iconStyle}
                    onPress={this._showModal}
                />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, backgroundColor: 'grey' }}>
                        
                    </View>
                </Modal>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center'
    },
    iconStyle: {
        paddingLeft: 100,
        marginRight: 100
    }
};
export default connect(null, actions)(AuthScreen);
