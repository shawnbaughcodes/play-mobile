import React, { Component } from 'react';
import {
    Icon,
    FormLabel,
    FormInput,
    FormValidationMessage,
    Button
} from 'react-native-elements';
import axios from 'axios';
import { View, AsyncStorage } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {
    state = {
        isModalVisible: false,
        text: '',
        email: '',
        password: ''
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })

    componentDidMount() {
        AsyncStorage.removeItem('fb_token');
    }
    onEmailChange = (text) => {
        this.emailChanged(text);
    }
    onPasswordChange = (text) => {
        this.passwordChanged(text);
    }
    handleSubmit = async () => {
        try {
            let response = await axios.post('https://us-central1-play-1dd07.cloudfunctions.net/createUser', {
                email: this.state.email,
                password: this.state.password
            });
            console.log(response);
            this.onSubmitComplete();
        } catch (e) {
            console.log(e);
        }
    }
    onSubmitComplete = () => {
        this.setState({ email: '', password: '' });
        this._hideModal();
        this.props.navigation.navigate('home');
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
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            value={this.state.email}
                            placeholder="example@provider.com"
                            onChangeText={email => this.setState({ email })}
                        />
                        <FormValidationMessage>
                            {'Please enter email'}
                        </FormValidationMessage>
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            value={this.state.password}
                            placeholder="123456+"
                            onChangeText={password => this.setState({ password })}
                        />
                        <FormValidationMessage>
                            {'Please enter password'}
                        </FormValidationMessage>
                        <Button
                            title="Sign Up/Log In"
                            onPress={this.handleSubmit}
                        />
                        <Button
                            title="Cancel"
                            onPress={this._hideModal}
                        />
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
    },
    containerStyle: {
        backgroundColor: 'white'
    }
};
function mapStateToProps({ auth }) {
    return { token: auth.token };
}
export default connect(mapStateToProps, actions)(AuthScreen);
