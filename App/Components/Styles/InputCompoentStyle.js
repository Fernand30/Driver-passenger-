import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle:{
        fontFamily:Fonts.type.base,
        letterSpacing:1,
        fontSize : Fonts.size.medium
    },
    inputStyle1:{
        fontFamily:Fonts.type.base,
        letterSpacing:1,
        fontSize : Fonts.size.medium,
        marginLeft:-5
    },
    labelStyle:{
        fontFamily:Fonts.type.base,
        fontSize: Fonts.size.small
    },
    Icon:{
        flexDirection:'row',
        alignItems:'center'
    },
    IconSubCont:{
        paddingRight : 8
    }
})
