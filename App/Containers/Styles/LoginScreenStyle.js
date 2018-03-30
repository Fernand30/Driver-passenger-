import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    padding: Metrics.baseMargin*2
  },
  forgotPassword:{
    textAlign:'center',
    color:Colors.skyblue,
    fontWeight:'700',
    margin:Metrics.baseMargin*3,
    fontFamily:Fonts.type.bold
  },
  buttonContainer:{
    marginTop:Metrics.baseMargin*3,
  },
  hr:{
    borderBottomColor: Colors.gray,
    borderBottomWidth: 1,
    height:1,
    padding:10
  }
})
