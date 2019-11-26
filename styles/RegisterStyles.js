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
        borderRadius: 15,
        backgroundColor: "#FEFEFE",
        borderWidth: 1,
        borderColor: "#f7f7f7",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: "#f7f7f7",
            }
        })
    },
    inpHeading:{
        marginTop: 5,
        marginBottom: 10
    },
    inp:{
        height: 60,
        paddingLeft: 15,
        backgroundColor: "#f7f7f7",
        borderRadius: 10
    },
    multilineInp:{
        textAlignVertical: "top",
        height: 180
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
    },
    subjectAddWrapper:{
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    addInp:{
        flex: 3,
        marginRight: 10
    },
    addGradeInp:{
        flex: 1,
        marginRight: 10
    },
    addBtnWrapper:{
        flex: 1,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#edfaff",
        borderColor: "#5dc1d8",
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10

    },
    addBtnTxt:{
        color: "#5dc1d8"
    },
    subjectsList:{
        paddingLeft: 10,
        paddingTop: 10
    },
    subjectTxt:{
        paddingTop: 10
    },
    msg:{
        paddingTop: 20,
        textAlign: "center",
        color: "red",
        fontSize: 11,
        fontStyle: "italic"
    },
    popUpWrapper:{
        justifyContent: "flex-end"
    },
    popUp:{
        backgroundColor: "#f7f7f7",
        borderRadius: 15,
        alignItems: "center",
        width: "100%",
        height: 100,
        flexDirection: "row",

    },
    popUpAnimation:{
        width: 100,
        height: 100
    },
    popUpTxt:{
        marginLeft: -5
    }
});

export default RegisterStyles;
