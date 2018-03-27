import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors, Metrics, Fonts, } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast, Label } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputCompoent from '../Components/InputCompoent'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterScreenStyle'

class RegisterScreen extends Component {
  constructor(props: RegisterScreenProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: ''
    }
  }
  /**
  * Render Login form
  */

  renderForm() {
    return (
      <View style={styles.mainview}>
       
          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <View style={{flex:0.45}}>
              <InputCompoent
                labelText='First Name'
                placeholder='Enter First Name'
                inputRef='firstName'
                value={this.state.firstName}
                secureTextEntry={false}
                onChangeText={(text) => this.setState({ firstName: text })}
              />
            </View>
            <View style={{flex:0.45}}>
              <InputCompoent
                labelText='Last Name'
                placeholder='Enter last name'
                inputRef='lastName'
                secureTextEntry={false}
                value={this.state.lastName}
                onChangeText={(text) => this.setState({ lastName: text })}
              />
            </View>
          </View>
          <View style={{height:20}}/>
          <InputCompoent
            labelText='Email Address'
            icon = ""
            placeholder='Enter Email Address'
            inputRef='email'
            value={this.state.email}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ email: text })}
          />
          <View style={{height:20}}/>
          <InputCompoent
            labelText='Password'
            icon = ""
            placeholder='Enter password'
            inputRef='password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <View style={{height:20}}/>
          <InputCompoent
            labelText='Confirm Password'
            icon = ""
            placeholder='Re-enter your password'
            inputRef='rePassword'
            secureTextEntry={false}
            value={this.state.rePassword}
            onChangeText={(text) => this.setState({ rePassword: text })}
          />
       
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
          text='Register'
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
          onPress={this.handleLogin}
        />
      </View>
    )
  }

  render() {
    return (
     
        
          <View style={styles.contentStyle}>

            {this.renderForm()}
          </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
