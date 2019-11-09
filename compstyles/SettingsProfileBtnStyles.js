import {StyleSheet} from 'react-native';
var SettingsProfileBtnStyles = StyleSheet.create({
    touchOp:{
        paddingTop: 10,
        paddingBottom: 5,
        marginLeft: 20,
        marginRight: 20,
        alignItems:"center",
        borderRadius: 15,
        backgroundColor: "#007DFF",
        justifyContent: "center"
    },
    mainCont:{
        flexDirection: "row"
    },
    img:{
        width: 120,
        height: 120
    },
    txt:{
        flexDirection: "column",
        paddingTop:20,
        paddingBottom:20
    },
    headTxt:{
        fontSize:35,
        color: "#ffffff"
    },
    bodyTxt:{
        fontSize:12,
        color: "#ffffff"
    }
});

export default SettingsProfileBtnStyles;