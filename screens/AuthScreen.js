import React, { Component } from 'react';
import {
  Icon,
  Input,
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
    login: false,
    register: false
  };
  _showLoginModal = () => this.setState({ isModalVisible: true, login: true });
  _showRegisterModal = () =>
    this.setState({ isModalVisible: true, register: true });
  _hideModal = () =>
    this.setState({ isModalVisible: false, login: false, register: false });

  componentDidMount() {
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.userIsRegistered) {
      this._hideModal();
      this.props.navigation.navigate('main');
    }
  }

  onEmailChange = text => {
    this.props.emailChanged(text.toLowerCase());
  };

  onPasswordChange = text => {
    this.props.passwordChanged(text);
  };

  onFNameChange = text => {
    this.props.fNameChanged(text);
  };

  onLNameChange = text => {
    this.props.lNameChanged(text);
  };

  onRegisterPress = () => {
    const { fname, lname, email, password } = this.props;
    this.props.registerUser({ fname, lname, email, password });
    this.onAuthComplete(this.props);
  };

  onLoginPress = () => {
    const { email, password } = this.props;
    this.props.doEmailLogin({ email, password });
    this.onAuthComplete(this.props);
  };

  onCancelPress = () => {
    this._hideModal();
  };

  renderFormContent = () => {
    let content;
    if (this.state.login) {
      content = (
        <View style={styles.formStyles}>
          <Input
            label="Email"
            name={this.props.email}
            placeholder="example@provider.com"
            onChangeText={this.onEmailChange}
            inputContainerStyle={styles.inputStyles}
          />
          <Input
            label="Password"
            secureTextEntry
            name={this.props.password}
            placeholder="123456+"
            onChangeText={this.onPasswordChange}
            inputContainerStyle={styles.inputStyles}
          />
        </View>
      );
    } else {
      content = (
        <View style={styles.formStyles}>
          <Input
            label="First Name"
            name={this.props.fname}
            placeholder="Ivan"
            onChangeText={this.onFNameChange}
            inputContainerStyle={styles.inputStyles}
          />
          <Input
            label="Last Name"
            name={this.props.lname}
            placeholder="Blimans"
            onChangeText={this.onLNameChange}
            inputContainerStyle={styles.inputStyles}
          />
          <Input
            label="Email"
            name={this.props.email}
            placeholder="example@provider.com"
            onChangeText={this.onEmailChange}
            inputContainerStyle={styles.inputStyles}
          />
          <Input
            label="Password"
            secureTextEntry
            name={this.props.password}
            placeholder="123456+"
            onChangeText={this.onPasswordChange}
            inputContainerStyle={styles.inputStyles}
          />
        </View>
      );
    }
    return content;
  };

  renderButton = () => {
    let content;
    if (this.state.login) {
      content = (
        <Button
          title="Login"
          onPress={this.onLoginPress}
          style={styles.submitStyles}
        />
      );
    } else if (this.state.register) {
      content = (
        <Button
          title="Sign Up"
          onPress={this.onRegisterPress}
          style={styles.submitStyles}
        />
      );
    }
    return content;
  };
  render() {
    return (
      <View style={styles.containerStyle}>
        <Icon
          reverse
          type="font-awesome"
          name="sign-in"
          size={40}
          iconStyle={styles.iconStyle}
          onPress={this._showLoginModal}
        />
        <Icon
          reverse
          type="font-awesome"
          name="pencil"
          size={40}
          iconStyle={styles.iconStyle}
          onPress={this._showRegisterModal}
        />
        <Modal isVisible={this.state.isModalVisible}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              paddingTop: 100,
              margin: 0
            }}
          >
            {this.renderFormContent()}
            {this.renderButton()}
            <Button
              title="Cancel"
              onPress={this.onCancelPress}
              style={styles.cancelStyles}
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
  },
  formStyles: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputStyles: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 50,
    marginTop: 5,
    marginBottom: 5
  },
  submitStyles: {
    width: SCREEN_WIDTH / 2,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'black',
    marginBottom: 20
  },
  cancelStyles: {
    width: SCREEN_WIDTH / 2,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'grey',
    marginBottom: 10
  }
};
const mapStateToProps = ({ auth }) => {
  return {
    userIsRegistered: auth.userIsRegistered,
    email: auth.email,
    fname: auth.fname,
    lname: auth.lname,
    password: auth.password
  };
};

export default connect(mapStateToProps, actions)(AuthScreen);
