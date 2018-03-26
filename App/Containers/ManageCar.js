import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image,Dimensions } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListHeader from '../Components/ListHeader';
import styles from './Styles/ManageCarStyle';
import { connect } from 'react-redux';
const {height, width} = Dimensions.get("window");
import InputCompoent from './../Components/InputCompoent'

class RateCardScreen extends Component {

    headerLeftContent(){
        return(
            <Text style={[styles.header, styles.leftHeader]}>STANDARD RATE</Text>
        )
    }

    headerRightContent(){
        return(
            <View style={styles.wrapText}>
                <Text style={[styles.header, styles.rightHeader]}>
                    Day
                </Text>
                <Icon style={{paddingLeft:5}} name="sun-o" size={18} />
            </View>
        )
    }

    render() {
        return (
            <Container>
                <View style={styles.imageView}>
                    <Image source = {require('./../../assets/images/download.png')} style={styles.image} />
                </View>
                <View style={styles.addressView}>
                    <View style={styles.addressView1}>
                        <Text style={styles.address}>GJ 3 AP 6855</Text>
                    </View>
                </View>
                <View style={styles.inputComponentView}>
                    <InputCompoent
                        placeholder='Vehicle no.'
                        inputRef='vehicle no'
                        value=''
                        secureTextEntry={false}
                        onChangeText=''
                    />
                    <InputCompoent
                        placeholder='Vehicle type'
                        inputRef='vehicle type'
                        secureTextEntry={true}
                        value=''
                        onChangeText=''
                    />
                    <InputCompoent
                        placeholder='lincense no'
                        inputRef='Lincense no'
                        secureTextEntry={true}
                        value=''
                        onChangeText=''
                    />
                    <InputCompoent
                        placeholder='lincense expire date'
                        inputRef='lincense expire date'
                        secureTextEntry={true}
                        value=''
                        onChangeText=''
                    />
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.buttonContent}>Save my Details</Text>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
RateCardScreen.navigationOptions = ({ navigation }) => ({
    title: "Manage My Cars",

    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.bookingPageHeader}
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

export default connect(mapStateToProps, mapDispatchToProps)(RateCardScreen)
