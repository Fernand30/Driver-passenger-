import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image,Dimensions } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import ListHeader from '../Components/ListHeader'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/BookingsScreenStyle';
import { connect } from 'react-redux';
const {height, width} = Dimensions.get("window");
class BookingsScreen extends Component {

    headerLeftContent(){
        return(
            <Text style={[styles.header, styles.leftHeader]}>FEBRUARY 15 - 4:50 PM</Text>
        )
    }

    headerRightContent(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{marginRight: 5,width: 8, height: 8, backgroundColor:'green'}}/>
                <Text style={[styles.header, styles.rightHeader]}>ACCEPTED</Text>
            </View>
        )
    }

    headerRightContentImage(){
        return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={require('./../../assets/images/canceled.png')} style={styles.canceled}/>
            </View>
        )
    }

    render() {
        return (
            <Container>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <Image source={require('./../../assets/images/mark.png')} style={styles.mark}/>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.childStyle1}>Pickup Location</Text>
                                    <Text style={styles.childStyle2}>Royal Light Cinema</Text>
                                </View>
                                <View style={styles.childItem}>
                                    <Text style={styles.childStyle1}>Destination Location</Text>
                                    <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <Image source={require('./../../assets/images/mark.png')} style={styles.mark}/>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.childStyle1}>Pickup Location</Text>
                                    <Text style={styles.childStyle2}>Royal Light Cinema</Text>
                                </View>
                                <View style={styles.childItem}>
                                    <Text style={styles.childStyle1}>Destination Location</Text>
                                    <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContentImage()} />
                        <View style={styles.subItem}>
                            <Image source={require('./../../assets/images/mark.png')} style={styles.mark}/>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.childStyle1}>Pickup Location</Text>
                                    <Text style={styles.childStyle2}>Royal Light Cinema</Text>
                                </View>
                                <View style={styles.childItem}>
                                    <Text style={styles.childStyle1}>Destination Location</Text>
                                    <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <Image source={require('./../../assets/images/mark.png')} style={styles.mark}/>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.childStyle1}>Pickup Location</Text>
                                    <Text style={styles.childStyle2}>Royal Light Cinema</Text>
                                </View>
                                <View style={styles.childItem}>
                                    <Text style={styles.childStyle1}>Destination Location</Text>
                                    <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <Image source={require('./../../assets/images/mark.png')} style={styles.mark}/>
                            <View style={styles.item}>
                                <View>
                                    <Text style={styles.childStyle1}>Pickup Location</Text>
                                    <Text style={styles.childStyle2}>Royal Light Cinema</Text>
                                </View>
                                <View style={styles.childItem}>
                                    <Text style={styles.childStyle1}>Destination Location</Text>
                                    <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}
BookingsScreen.navigationOptions = ({ navigation }) => ({
    title: <Text style={{fontSize:18}}>My Trips</Text>,
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

export default connect(mapStateToProps, mapDispatchToProps)(BookingsScreen)