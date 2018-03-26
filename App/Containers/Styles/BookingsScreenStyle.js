import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  bookingPageHeader: {
    padding: 20
  },
  header: {
      fontSize: 12,
      fontWeight: 'bold'
  },
  leftHeader: {
      color: Colors.steel
  },
  rightHeader: {
      color: 'black'
  },
  item: {
      flex: 1,
      flexDirection: 'column'
  },
  subItem: {
      flex: 1,
      flexDirection: 'row'
  },
  partition1: {
      width: '25%',
      height: 160,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center'
  },
  partition2: {
      width: '75%',
      height: 160,
      backgroundColor: 'white'
  },
  childItem: {
      width: '100%',
      height: 30
  },
  childStyle1: {
      paddingTop: 15,
      fontSize: 12,
      color: Colors.steel
  },
  childStyle2: {
      fontSize: 16,
      color: "black"
  }

})
