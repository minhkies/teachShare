import {StyleSheet} from 'react-native';

const RegisterStyles = StyleSheet.create({
    wrapper:{
        flex: 1,
        margin: -20,
        padding: 20,
        backgroundColor: "white"
    },
    pgTitleWrapper:{
        marginTop: 100,
        marginBottom: 50,
        margin: 20
    },
    pgTitle:{
        fontSize: 48,
        fontWeight: "700"
    },
    inpWrapper:{
        elevation : 10,
        borderRadius: 15,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    inpHeading:{

        marginTop: 5,
        marginBottom: 10
    },
    inp:{
        height: 60,
        paddingLeft: 15,
        backgroundColor: "#ebebeb",
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
        marginTop: 50,
        margin: 20
    },
    registerBtn:{
        height: 60,
        marginBottom: 5,
        borderRadius: 10,
        borderWidth: .5,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fef6eb",
        borderColor: "#d3b594",

    },
    registerBtnTxt:{
        color: "#d3b594"
    },
    loginBtn:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        paddingBottom: 40
    },
    loginBtnTxt:{
        color: "#b0b0b0"
    }
});

export default RegisterStyles;