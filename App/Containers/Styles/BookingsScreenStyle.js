import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  bookingPageHeader: {
    padding: 20
  },
  header: {
      fontSize: 11,
      fontWeight: 'bold'
  },
  leftHeader: {
      color: Colors.steel
  },
  rightHeader: {
      color: 'black'
  },
  item: {
      marginLeft: 20
  },
  subItem: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingLeft: 30,
      paddingVertical: 20
  },
  partition1: {
      width: '25%',
      height: 160,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },
  mark:{
    width: width / 30,
    height: width /30 / 27*162
  },
  canceled:{
    width: width / 10,
    height: width /10 / 95*81,
    marginTop : -10
  },
  menu:{
        width: width / 18,
        height: width / 18 /766*577
    },
  partition2: {
      width: '75%',
      height: 160,
      backgroundColor: 'white'
  },
  childItem: {
      marginTop: 25
  },
  childStyle1: {
      fontSize: 12,
      color: Colors.steel
  },
  childStyle2: {
      fontSize: 15,
      color: "black"
  }

})
