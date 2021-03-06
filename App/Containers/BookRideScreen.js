import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image, Switch } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import MapView from 'react-native-maps';
import { Colors } from '../Themes/';
import styles from './Styles/BookRideScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import InputCompoent from '../Components/InputCompoent';
import { connect } from 'react-redux';



class BookRideScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 1,
            latt : 37.78825,
            long: -122.4324,
            lattDelta: 0.0922,
            longDelta: 0.0421,
        }
        this.renderMapSuccess = this.renderMapSuccess.bind(this);
        this.footerForRequestRide = this.footerForRequestRide.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.renderMapSuccess);
    }

    renderMapSuccess(pos){
        var crd = pos.coords;
        this.setState({
            latt: crd.latitude,
            long: crd.longitude,
            lattDelta: 0.0922,
            longDelta: 0.0421
        })
    }

    footerForRequestRide(){
        return(
            <Footer style={styles.footerForRequest}>
                <View style={styles.footerForRequestMain}>
                    <View style={styles.footerForRequestView}>
                        <Image source={require('./../../assets/images/profile.jpg')} style={styles.footerForRequestImage}/>
                        <View>
                            <Text style={styles.footerForRequestName}>John Karter</Text>
                            <Text style={styles.footerForRequestEmail}>johnkarter@gmail.com</Text>
                        </View>
                        <View style={styles.rightView}>
                            <Text style={styles.footerForRequestGoOffline}>GO OFFLINE</Text>
                            <Switch tintColor='green' style={styles.switch}/>
                        </View>
                    </View>
                </View>
            </Footer>
        )
    }

    render() {
        return (
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{latitude: this.state.latt, longitude: this.state.long, latitudeDelta: this.state.lattDelta, longitudeDelta: this.state.longDelta }}
                    >
                </MapView>
                {this.footerForRequestRide()}
            </View>
        )
    }
}

BookRideScreen.navigationOptions = ({ navigation }) => ({
    title: <Text style={{fontSize:18}}>Home</Text>,
    navBarBackgroundColor: '#fff',
    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.headerOfBookRide}
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

export default connect(mapStateToProps, mapDispatchToProps)(BookRideScreen)