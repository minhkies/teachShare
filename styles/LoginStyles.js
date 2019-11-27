import {StyleSheet} from 'react-native';

const LoginStyles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: "space-between",
        alignItems: "stretch",
        backgroundColor: "#ffffff",
        padding: 20
    },
    topWrapper:{
        justifyContent: "space-around",
        marginTop: 70
    },
    imgWrapper:{
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        height: 200,
        width: 200,
        resizeMode: "contain",

    },
    txtInpWrapper:{
        alignItems: "stretch"
    },
    txtInp:{
        height: 60,
        paddingLeft: 15,
        marginBottom: 5,
        backgroundColor: "#f7f7f7",
        borderRadius: 10
    },
    passInpWrapper:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    passInp:{
        width: "100%",
        marginLeft: -15
    },
    passImgWrapper:{
        width: 15,
        height: 15,
        marginLeft: -30
    },
    passImg:{
        width: 15,
        height: 15,
        resizeMode: "contain"
    },
    btnWrapper:{
        justifyContent: "center",
        alignItems: "center"
    },
    btn:{
        height: 60,
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: .5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    loginBtn:{
        backgroundColor: "#edfaff",
        borderColor: "#5dc1d8",

    },
    loginBtnTxt:{
        color: "#5dc1d8"
    },
    registerBtn:{
        backgroundColor: "#fef6eb",
        borderColor: "#d3b594",

    },
    registerBtnTxt: {
        color: "#d3b594"
    },
    forgetBtn:{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20
    },
    forgetBtnTxt:{
        color: "#b0b0b0"
    },
    msg:{
        paddingTop: 20,
        textAlign: "center",
        color: "red",
        fontSize: 11,
        fontStyle: "italic"
    }
});

export default LoginStyles;
