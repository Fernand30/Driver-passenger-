import React, { Component } from 'react'
import { View, Image, Text, Modal, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors, Metrics, Fonts, } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast, Label } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputCompoent from '../Components/InputCompoent'
import PrimaryNav from '../Navigation/AppNavigation'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'


class LoginScreen extends Component {

  constructor(props: LoginScreenProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
      modalVisible: false
    }
  }
  componentWillReceiveProps(nextProps) {

  }
  /**
   * Render Login form
  */
  renderForm() {
    return (
      <View style={styles.formContainer}>
        <Form>
          <InputCompoent
            labelText='Email Address'
            icon ="envelope-o"
            placeholder='Enter Email Address'
            inputRef='email'
            value={this.state.email}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ email: text })}
          />
          <InputCompoent
            labelText='Password'
            icon ="unlock-alt"
            placeholder='Enter Password'
            inputRef='password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />

        </Form>
        <FullButton
          text='Forgot Password ?'
          style={{
            backgroundColor: Colors.snow,
            bottom: 10,
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 50,
            height: Metrics.baseMargin * 2,
          }}
          textStyle={{
            color: Colors.skyblue,
            fontSize: 14
          }}
          onPress={() => {
            // this.setState({ modalVisible: true })
          }}
        />
        {/* <Text style={styles.forgotPassword} onPress={()=>this.setState({modalVisible: true})}>Forgot Password ?</Text> */}
      </View>
    )
  }
  /***
   * Button Containter
  */
  renderButton() {
    return (
      <View style={styles.buttonContainer}>
        <FullButton
          text='login'
          style={{
            backgroundColor: Colors.skyblue,
            bottom: 10,
            alignItems: 'center',
            borderRadius: 5,
            height: Metrics.baseMargin * 5,
          }}
          textStyle={{
            color: '#f0f0f0',
          }}
          onPress={() => {this.props.navigation.navigate('mainStack')}}
        />
        <View
          style={styles.hr}
        />
        <FullButton
          text='login via facebook'
          style={{
            backgroundColor: Colors.facebook,
            bottom: Metrics.baseMargin,
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 40,
            height: Metrics.baseMargin * 5,
          }}
          textStyle={{
            color: '#f0f0f0',
          }}
          onPress={this.handleLogin}
        />
      </View>
    )
  }

  /**
   * Forgot password modal
   */
  renderModal() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>

              <FullButton
                text='Reset password'
                style={{
                  backgroundColor: Colors.skyblue,
                  bottom: 10,
                  alignItems: 'center',
                  borderRadius: 5,
                  height: Metrics.baseMargin * 5,
                }}
                textStyle={{
                  color: '#f0f0f0',
                }}
                onPress={() => {
                  this.setState({ modalVisible: false });
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  render() {
    return (
      <Container>
          <Content>
          <View style={styles.contentStyle}>
            {this.renderModal()}
            {this.renderForm()}
            {this.renderButton()}
          </View>

        </Content>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.auth.fetching,
    error: state.auth.error,
    passcode: state.auth.passcode,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    attemptLogin: (passcode) => dispatch(AuthActions.authRequest(passcode)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


