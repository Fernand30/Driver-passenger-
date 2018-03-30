import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
    flex:1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject
    },
    footerForRequest: {
        flex: 0.23,
        opacity: 0.8,
        backgroundColor: 'black',
    },
    footerForRequestMain: {
        flex:1,
        justifyContent:'center'
    },
    footerForRequestView: {
        flex: 0.4,  
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal: width/25
    },
    rightView:{
        alignItems:'center',
    },
    switch:{
        marginTop: 10,
        transform: [{ scaleX: .8 }, { scaleY: .8 }]
    },
    menu:{
        width: width / 18,
        height: width / 18 /766*577
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
        width:width*0.2,
        height:width*0.2,
        borderRadius:width*0.1,
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
       
    },
    footerForRequestEmail:{
        fontSize:16, color:'white',
        marginTop :10
    },
    footerForRequestSwitch:{
        height:height,
        paddingRight:5
    },
    headerOfBookRide: {
        paddingLeft: width / 25
    },
})






