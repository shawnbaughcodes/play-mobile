import React, { Component } from 'react';
import {
    Icon,
    FormLabel,
    FormInput,
    FormValidationMessage,
    Button
} from 'react-native-elements';
import { View, AsyncStorage, Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;
class AuthScreen extends Component {
    state = {
        isModalVisible: false,
    }
    _showModal = () => this.setState({ isModalVisible: true })
    _hideModal = () => this.setState({ isModalVisible: false })
    componentDidMount() {
        AsyncStorage.removeItem('fb_token');
        AsyncStorage.removeItem('email_token');
        this.onAuthComplete(this.props);
    }
    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }
    onAuthComplete(props) {
        if (props.tokenFB || props.tokenEM) {
            this._hideModal();
            this.props.navigation.navigate('main');
        }
    }
    onEmailChange = (text) => {
        this.props.emailChanged(text);
    }
    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    }
    onFNameChange = (text) => {
        this.props.fNameChanged(text);
    }
    onLNameChange = (text) => {
        this.props.lNameChanged(text);
    }
    onRegisterPress = () => {
        const { fname, lname, email, password } = this.props;
        this.props.registerUser({ fname, lname, email, password });
        this._hideModal;
    }
    onLoginPress = () => {
        this._showModal();
    }
    onCancelPress = () => {
        this._hideModal();
    }
    render() {
        return (
            <View style={styles.containerStyle}>
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
                    name='sign-in'
                    size={40}
                    iconStyle={styles.iconStyle}
                    onPress={this._showModal}
                />
                <Icon
                    reverse
                    type='font-awesome'
                    name='pencil'
                    size={40}
                    iconStyle={styles.iconStyle}
                    onPress={this._showModal}
                />
                <Modal isVisible={this.state.isModalVisible}>
                    <View style={{ flex: 1, backgroundColor: 'white' }}>
                        <FormLabel>First Name</FormLabel>
                        <FormInput
                            value={this.props.firstname}
                            placeholder="John"
                            onChangeText={this.onFNameChange}
                        />
                        <FormLabel>Last Name</FormLabel>
                        <FormInput
                            value={this.props.lastname}
                            placeholder="Doe"
                            onChangeText={this.onLNameChange}
                        />
                        <FormLabel>Email</FormLabel>
                        <FormInput
                            value={this.props.email}
                            placeholder="example@provider.com"
                            onChangeText={this.onEmailChange}
                        />
                        <FormLabel>Password</FormLabel>
                        <FormInput
                            secureTextEntry
                            value={this.props.password}
                            placeholder="123456+"
                            onChangeText={this.onPasswordChange}
                        />
                        <Button
                            title="Sign Up"
                            onPress={this.onRegisterPress}
                        />
                        <Button
                            title="Cancel"
                            onPress={this.onCancelPress}
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    }
};
const mapStateToProps = ({ auth }) => {
    return {
        tokenEM: auth.tokenEM,
        email: auth.email,
        fname: auth.fname,
        lname: auth.lname,
        password: auth.password
    };
}

export default connect(mapStateToProps, actions)(AuthScreen);
