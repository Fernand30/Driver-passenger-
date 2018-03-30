import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image,Dimensions } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListHeader from '../Components/ListHeader';
import styles from './Styles/ManageCarStyle';
import { Dropdown } from 'react-native-material-dropdown';
import { connect } from 'react-redux';
const {height, width} = Dimensions.get("window");
import InputCompoent from './../Components/InputCompoent'
const data = [{
      value: 'Vehicle no.',
    }, {
      value: 'Vehicle type',
    }, {
      value: 'Lincense no.',
    },{
      value: 'Lincense expire date',
    }];

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
                
                <Image source = {require('./../../assets/images/download.png')} style={styles.image} />
                <View style={styles.addressView1}>
                    <Text style={styles.address}>GJ 3 AP 6855</Text>
                </View>
                <View style={styles.inputComponentView}>
                    <InputCompoent
                        placeholder='Vehicle no.'
                        inputRef='vehicle no'
                        value=''
                        secureTextEntry={false}
                        onChangeText=''
                    />
                    <Dropdown
                        label=''
                        data={data}
                        fontSize={13}
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
    title: <Text style={{fontSize:18}}>Manage My Cars</Text>,
    navBarBackgroundColor: '#fff',

    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.bookingPageHeader}
        >
            <Image source={require('./../../assets/images/menu.png')} style={styles.menu}/>

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
