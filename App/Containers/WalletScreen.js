import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image,Dimensions,ImageBackground, FlatList } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import ListHeader from '../Components/ListHeader';
import styles from './Styles/WalletScreenStyle';
import { connect } from 'react-redux';

const {height, width} = Dimensions.get("window");
import InputCompoent from './../Components/InputCompoent'

const data=[{price:35},{price:35},{price:35},{price:-5},{price:35},{price:35},{price:35},{price:35},{price:35},{price:35}]


class RateCardScreen extends Component {

    constructor(props){
        super(props)
        this.state=({
            all:false,
            debit:true,
            credit: false
        })
    }

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

    _renderItem({item}){
        return(
        <View style={styles.rowView}>
            <Image source={require('./../../assets/images/dollar.png')} style={styles.dollarImage}/>
            <View style={{paddingTop:5, flex:1}}>
                <Text style={styles.janet}>Janllet Williamsan</Text>
                <Text style={styles.date}>21-01-2018 2:00 PM</Text>
            </View>
            
            {(item.price<0)?<View style={{flexDirection:'row',paddingTop:5}}>
            <Text style={styles.plus}>-</Text>
            <Text style={styles.price}>${item.price*-1}</Text></View>:
            <View style={{flexDirection:'row',paddingTop:5}}>
            <Text style={styles.plus}>+</Text>
            <Text style={styles.price}>${item.price}</Text></View>}
          
        </View>
        )
    }

    render() {
        return (
            <Container>
               <View style={styles.mainView}> 
                <ImageBackground source = {require('./../../assets/images/ticket.png')} style={styles.ticket}>
                    <Text style={styles.title}>Wallet Balance</Text>
                    <View style={{flexDirection:'row',alignItems:'flex-end', marginTop:5}}>
                        <Text style={styles.dollar}>$</Text>
                        <Text style={styles.number}>25</Text>
                    </View>
                </ImageBackground>
                <View style={styles.tabView}>
                    <TouchableOpacity onPress={()=>this.setState({all: true, debit: false, credit: false})} style={(this.state.all)?styles.selecttab:styles.tab}>
                        <Text style={styles.text}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({all: false, debit: true, credit: false})} style={(this.state.debit)?styles.selecttab:styles.tab}>
                        <Text style={styles.text}>Debit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({all: false, debit: false, credit: true})} style={(this.state.credit)?styles.selecttab:styles.tab}>
                        <Text style={styles.text}>Credit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.listView}>
                    <FlatList
                        data={data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index}
                        renderItem={this._renderItem}
                      />
                </View>
              </View>  
            </Container>
        )
    }
}
RateCardScreen.navigationOptions = ({ navigation }) => ({
    title: '',
    navBarBackgroundColor: '#fff',
    headerStyle: {
      backgroundColor:'#f4f5f9'
    },
    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.bookingPageHeader}
        >
            <Image source={require('./../../assets/images/menu.png')} style={styles.menu}/>
        </TouchableOpacity>
    ),
    headerRight: (
        <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.5}
            style={styles.bookingPageHeader}
        >
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{fontSize:16, fontWeight:'600'}} >+</Text>
                <Text style={{fontSize:15, fontWeight:'600', marginLeft:5}} >Money</Text>
            </View>
        </TouchableOpacity>
    ),
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
