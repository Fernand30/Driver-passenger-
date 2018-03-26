import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image } from 'react-native';
import { Container, Content, Footer, Label, Button } from 'native-base';
import { Images, Colors, Metrics, Fonts, } from '../Themes';
import FullButton from '../Components/FullButton';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.profilePicContent}>
            <View style={styles.profilePicView}>
              <Image
                source={Images.userDefault}
                style={styles.profilePic}
              />
            </View>
            <Text style={styles.userName}> Nakul Kundaliya </Text>
            <Text style={styles.phoneNumber}> +917567028382 </Text>
          </View>

          <View style={styles.userInfoContent}>
              <View style={styles.userFormContent}>
                  <View style={styles.userFormIcon}>
                    <Icon name="user-o" size={20} color="#cdcdcd" />
                  </View>
                  <View style={styles.userFormUl}>
                    <Text style={styles.userFormLabel}>Full Name</Text>
                  </View>
                  <View style={styles.userFormUl}>
                    <Text style={styles.userFormText}>Vanessa Donovan</Text>
                  </View>
                  <View style={styles.userFormUlIcon}>
                    <Icon name="play" size={13} color="#75B1FA" />
                  </View>
            </View>

            <View style={styles.userFormContent}>
              <View style={styles.userFormIcon}>
                <Icon name="envelope-o" size={20} color="#cdcdcd" />
              </View>
              <View style={styles.userFormUl}>
                <Text style={styles.userFormLabel}>Email Address</Text>
              </View>
              <View style={styles.userFormUl}>
                <Text style={styles.userFormText}>Vanessadon...</Text>
              </View>
              <View style={styles.userFormUlIcon}>
                <Icon name="play" size={13} color="#75B1FA" />
              </View>
            </View>

            <View style={styles.userFormContent}>
              <View style={styles.userFormIcon}>
                <Icon name="mobile" size={25} color="#cdcdcd" />
              </View>
              <View style={styles.userFormUl}>
                <Text style={styles.userFormLabel}>Mobile Number</Text>
              </View>
              <View style={styles.userFormUl}>
                <Text style={styles.userFormText}>+00 984 979 137</Text>
              </View>
              <View style={styles.userFormUlIcon}>
                <Icon name="play" size={13} color="#75B1FA" />
              </View>
            </View>

            <View style={styles.userFormContent}>
              <View style={styles.userFormIcon}>
                <Icon name="lock" size={20} color="#cdcdcd" />
              </View>
              <View style={styles.userFormUl}>
                <Text style={styles.userFormLabel}>Update Password</Text>
              </View>
              <View style={styles.userFormUl}>
                <Text style={styles.userFormText}></Text>
              </View>
              <View style={styles.userFormUlIcon}>
                <Icon name="play" size={13} color="#75B1FA" />
              </View>
            </View>
          </View>
        </Content>

        <Footer>

          <TouchableOpacity style={styles.profilePageFooter}>
            <View style={styles.profilePageFooterView}>
              <Text style={styles.profilePageFooterText}>Log out</Text>
              </View>
          </TouchableOpacity>

        </Footer>
      </Container>
    )
  }
}
ProfileScreen.navigationOptions = ({ navigation }) => ({
  title: "",

  headerLeft: (
    <TouchableOpacity
      onPress={() => navigation.navigate("DrawerOpen")}
      activeOpacity={0.5}
      style={styles.profilePageHeader}
    >
      <Icon name="bars" size={20} />

    </TouchableOpacity>
  ),
  headerRight: <Text />
});
const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
