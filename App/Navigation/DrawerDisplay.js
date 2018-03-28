import React, {Component} from 'react';
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image, Dimensions, ImageBackground, StyleSheet, Switch } from 'react-native';
import styles from './Styles/NavigationStyles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DrawerDisplay extends Component{

    renderHeader(){
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProfileStack')}}>
                    <Image style={styles.backgroundImg} blurRadius={10} source={require("./../../assets/images/profile.jpg")}/>
                    <View style={styles.avatarContainer}>
                        
                        <Image style={styles.innerImg} source={require("./../../assets/images/profile.jpg")}/>
                        
                        <View style={styles.SwitchView}>
                            <Text style={styles.imgText}>Renessa Donovan</Text>
                            <Switch style={styles.SwitchButton}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('mainStack')}}>
                        <View style={styles.menuView}>
                            <View style={styles.fixView}>
                                <Image style={styles.home} source={require("./../../assets/images/home.png")}/>
                            </View>
                            <Text style={styles.text}>Home </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookingStack')}}>
                        <View style={styles.menuView}>
                            <View style={styles.fixView}>
                                <Image style={styles.home} source={require("./../../assets/images/request.png")}/>
                            </View>
                            <Text style={styles.text}>All Request </Text>
                        </View>
    
                    </TouchableOpacity>
                </View>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={styles.menuView}>
                            <View style={styles.fixView}>
                                <Image style={styles.home} source={require("./../../assets/images/password.png")}/>
                            </View>
                            <Text style={styles.text}>Change Password</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>


                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('RateCardStack')}}>
                        <View style={styles.menuView}>
                            <View style={styles.fixView}>
                                <Image style={styles.car} source={require("./../../assets/images/car.png")}/>
                            </View>
                            <Text style={styles.text}>Manage Car</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>


                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('WalletStack')}}>
                        <View style={styles.menuView}>
                            <View style={styles.fixView}>
                                <Image style={styles.wallet} source={require("./../../assets/images/wallet.png")}/>
                            </View>
                            <Text style={styles.text}>Wallet</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderFooter(){
        return (
            <View style={[styles.footer]}>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                    <Image style={styles.home} source={require("./../../assets/images/logout.png")}/>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderFooter()}
            </View>
        )
    }
}


