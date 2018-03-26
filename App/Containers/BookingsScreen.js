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
            <Text style={[styles.header, styles.leftHeader]}>JANUARY</Text>
        )
    }

    headerRightContent(){
        return(
            <Text style={[styles.header, styles.rightHeader]}>PENDING</Text>
        )
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Icon name="map-marker" size={20} color="#75B1FA"/>
                            </View>
                            <View style={styles.partition2}>
                                <View style={styles.item}>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Pickup Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Icon name="map-marker" size={20} color="#75B1FA"/>
                            </View>
                            <View style={styles.partition2}>
                                <View style={styles.item}>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Pickup Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Icon name="map-marker" size={20} color="#75B1FA"/>
                            </View>
                            <View style={styles.partition2}>
                                <View style={styles.item}>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Pickup Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Icon name="map-marker" size={20} color="#75B1FA"/>
                            </View>
                            <View style={styles.partition2}>
                                <View style={styles.item}>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Pickup Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Icon name="map-marker" size={20} color="#75B1FA"/>
                            </View>
                            <View style={styles.partition2}>
                                <View style={styles.item}>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Pickup Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>
                                    </View>
                                    <View style={styles.childItem}>
                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>
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
    title: "My Bookings",

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

export default connect(mapStateToProps, mapDispatchToProps)(BookingsScreen)