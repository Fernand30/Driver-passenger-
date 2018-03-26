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
                        <View style={styles.img}>
                            <Image style={styles.innerImg} source={require("./../../assets/images/profile.jpg")}/>
                        </View>
                        <View style={styles.SwitchView}>
                        <Text style={styles.imgText}>Renessa Donovan</Text>
                        <Switch style={styles.SwitchButton}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {}}>
                        <View style={[styles.flex1, styles.leftMargin]}>
                            <Icon name="home" size={20} />
                        </View>
                        <View>
                            <Text style={styles.text}>Book Home </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookingStack')}}>
                        <View style={styles.flex1}>
                            <Icon name="globe" size={20} />
                        </View>
                        <View>
                            <Text style={styles.text}>All Request</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('RateCardStack')}}>
                        <View>
                            <View style={styles.flex1}>
                                <Icon name="key" size={15} />
                            </View>
                            <View>
                                <Text style={styles.text}>Change Password</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.subContainer}>
                    <TouchableOpacity>
                        <View>
                            <View style={styles.flex1}>
                                <Icon name="car" size={20} />
                            </View>
                            <View>
                                <Text style={styles.text}>Manage Car</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.subContainer}>
                    <TouchableOpacity>
                        <View style={[styles.flex1, styles.leftMargin]}>
                            <Icon name="google-wallet" size={20} />
                        </View>
                        <View>
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
                <TouchableOpacity>
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


