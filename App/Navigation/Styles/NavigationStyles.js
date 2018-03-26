import { StyleSheet, Dimensions } from 'react-native'
import { Colors } from '../../Themes/'
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    header: {
        backgroundColor: Colors.backgroundColor
    },
    backgroundImg: {
        width: 250,
        height: height * 0.3
    },
    avatarContainer: {
        position: 'absolute'
    },
    img : {
        width:width * 0.2,
        height:width * 0.2,
        borderRadius: 100,
        marginTop:height * 0.11,
        marginLeft:width * 0.08
    },
    imgText : {
        fontSize:15,
        color:'#fff',
        marginLeft:width * 0.06,
        marginTop:width * 0.02
    },
    innerImg : {
        borderRadius: 100,
        width:width * 0.2,
        height:width * 0.2
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    subContainer: {
        marginTop: 30,
        marginLeft: 20
    },
    flex1: {
        flex: 1
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
        marginLeft: 40,
        fontSize: 15
    },
    SwitchView:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    SwitchButton:{
        padding:5
    }

})
