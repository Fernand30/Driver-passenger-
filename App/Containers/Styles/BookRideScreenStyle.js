import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    height: 520,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    footerForRequest: {
        flex: 0.3,
        opacity: 0.6,
        backgroundColor: 'black'
    },
    footerForRequestMain: {
        width: '100%'
    },
    footerForRequestView: {
        flex: 0.9,
        flexDirection: 'row'
    },
    footerForRequestProfileImageMainView:{
        height:height,
        width:width*0.3,
        alignItems:'center',
        backgroundColor: 'black'
    },
    footerForRequestProfileImageView:{
        width:width*0.26,
        height:width*0.26,
        marginTop:height*0.04,
        borderRadius:100
    },
    footerForRequestImage:{
        width:width*0.26,
        height:width*0.26,
        borderRadius:100
    },
    footerForRequestContentView:{
        width:width*0.8,
        height:height,
        backgroundColor: 'black'
    },
    footerForRequestContentView1:{
        width:width*0.7,
        height:height*0.06,
        flexDirection:'row',
        marginTop:height*0.07,
        justifyContent:'space-between'
    },
    footerForRequestNameView:{
        height:height,
        paddingLeft:4
    },
    footerForRequestName:{
        fontWeight:'bold',
        fontSize:18,
        color:'white'
    },
    footerForRequestGoOfflineView:{
        height:height,
        paddingRight:5
    },
    footerForRequestGoOffline:{
        fontSize:14,
        color:'white'
    },
    footerForRequestContentView2:{
        width:width*0.7,
        height:height*0.06,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    footerForRequestEmailView:{
        height:height,
        paddingLeft:4,
    },
    footerForRequestEmail:{
        fontSize:16, color:'white'
    },
    footerForRequestSwitch:{
        height:height,
        paddingRight:5
    },
    headerOfBookRide: {
        paddingLeft: 50
    },
})






