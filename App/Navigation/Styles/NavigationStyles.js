import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Themes/'
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    header: {
        backgroundColor: Colors.backgroundColor
    },
    backgroundImg: {
        width: 250,
        height: height * 0.23
    },
    avatarContainer: {
        position: 'absolute',
        paddingTop: 30,
        paddingLeft:20
    },
    img : {
        width:width * 0.2,
        height:width * 0.2,
        borderRadius: 100,
        marginTop:height * 0.11,
        marginLeft:width * 0.08
    },
    imgText : {
        fontSize:16,
        color:'#fff',
    },
    innerImg : {
        borderRadius: width * 0.1,
        width:width * 0.2,
        height:width * 0.2
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    subContainer: {
        marginTop: 20,
        marginLeft: 15
    },
    flex1: {
        flex: 1
    },
    home:{
        width: width /20,
        height: width / 20
    },
    wallet:{
        width: width /20,
        height: width / 20/58*57
    },
    car:{
        width: width /20,
        height: width / 20/57*28
    },
    menuView:{
        flexDirection: 'row',
        alignItems:'center'
    },
    fixView:{
        alignItems:'center',
        width: width / 15
    },
    footer: {
        height: 50,
        borderTopColor:'lightgrey',
        borderTopWidth:1,
        justifyContent: 'center',
        paddingLeft: 20
    },
    leftMargin: {
        marginLeft: 2
    },
    text: {
        marginLeft: 15,
        fontSize: 14
    },
    SwitchView:{
        flexDirection:'row',
        marginTop:width * 0.02,
        alignItems:'center'
    },
    SwitchButton:{
        marginLeft: 15,
        transform: [{ scaleX: .8 }, { scaleY: .8 }]
    }

})
