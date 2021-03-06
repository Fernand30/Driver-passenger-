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
    menu:{
        width: width / 18,
        height: width / 18 /766*577
    },
    partition1: {
        width: '100%',
        height: 110,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    partition2: {
        width: '75%',
        height: 140,
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
    },
    main:{
        flex:1,
        flexDirection:'row'
    },
    mainLeftSub:{
        width:width*0.25,
        justifyContent:'center'
    },
    subText:{
        fontWeight:'bold'
    },
    leftSubIcon:{
        width:width*0.05,
        justifyContent:'center'
    },
    mainRightSub:{
        width:width*0.6,
        justifyContent:'center',
        alignItems:'center'
    },
    mainRightImg:{
        marginLeft:55,
        width:130,
        height:60
    },
    mainRightText1:{
        marginTop: 5,
        marginLeft: 7
    },
    mainRightText2:{
        color : "#75B1FA"
    },
    marinRightText:{
        color:'blue'
    },
    subLeftCont:{
        paddingTop: 10,
        width:width*0.498,
        justifyContent:'center'
    },
    subLeftSub1:{
        marginLeft:17,
        width:width*0.498,
        justifyContent:'center'
    },
    subLeftSub2:{
        marginLeft:17,
        width:width*0.3,
        height:height*0.04
    },
    subLeftText:{
        color: Colors.steel,
        marginBottom:8
    },
    midLine:{
        width:width*0.008,
        backgroundColor: Colors.steel,
        height:120
    },
    locIcon:{
        paddingTop: 5,
        width:width*0.498,
        justifyContent:'center'
    },
    locText:{
        fontSize:12,
        color: Colors.steel,
        marginTop:8
    },
    wrapText:{
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    bottom:{
        height:140
    },
    bottomText:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:Colors.steel,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth:1
    },
    bottomSubText:{
        paddingTop: 10
    },
    image:{
        width:width * 0.5,
        height:width * 0.5/981*422,
        alignSelf: 'center',
        marginTop: 20
    },
    addressView:{
        width:width,
        height:height * 0.1 ,
        alignItems:'center'
    },
    addressView1:{
        paddingHorizontal: 35,
        paddingVertical: 2,
        backgroundColor:'#f9d900',
        borderWidth:3,
        borderColor:'black',
        borderRadius:3,
        justifyContent:'center',
        alignSelf: 'center',
        marginTop: 20
    },
    address:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 3.5,
        color:'black'
    },
    inputComponentView:{
        width:width,
        height:height * 0.45,
        paddingLeft:20,
        paddingRight:20
    },
    buttonView:{
        width:width,
        height:height*0.11,
        alignItems:'center',
        marginTop:15
    },
    Button:{
        width:width*0.8,
        height:height*0.06,
        backgroundColor:'#2297f4',
        borderRadius:5,
        alignItems:'center',
        justifyContent: 'center'
    },
    buttonContent:{
        color:'white',
        textAlign:'center',
        fontSize: 16
    }

})
