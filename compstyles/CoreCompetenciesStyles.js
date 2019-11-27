import {StyleSheet} from 'react-native';

let CoreCompetenciesStyles = StyleSheet.create({
    wrapper:{
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50
    },
    btn:{
        margin: 5,
        padding: 20,
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: "center",
        alignItems:"center",
        fontWeight: "bold"
    },
    btnCommunication:{
        color: "#7C7C81",
        borderColor: "#f7f7f7",
        backgroundColor: "#f7f7f7"
    },
    btnThinking:{
        color: "#7C7C81",
        borderColor: "#f7f7f7",
        backgroundColor: "#f7f7f7"
    },
    btnSocial:{
        color: "#7C7C81",
        borderColor: "#f7f7f7",
        backgroundColor: "#f7f7f7"
    },
    btnCommunicationSelected:{
        color: "#F58855",
        borderColor: "#F58855",
        backgroundColor: "#fef9f5"
    },
    btnThinkingSelected:{
        color: "#009ADA",
        borderColor: "#009ADA",
        backgroundColor: "#f2f5fb"
    },
    btnSocialSelected:{
        color: "#4FB76E",
        borderColor: "#4FB76E",
        backgroundColor: "#f0f7ed"
    },
    modalPopup:{
        margin: 0,
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: "white",
        justifyContent: "space-around",
        alignItems: "center"
    },
    popupContentWrapper:{
        flex: 9,
        justifyContent: "flex-start",
        width: "100%"
    },
    popupHeadingWrapper:{
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginTop: 40,
    },
    popupHeading:{
        fontSize: 36,
        fontWeight: "bold",
        justifyContent: "center",
        alignItems: "center"
    },
    popupDesc:{
        alignItems: "center",
        color: "gray",
        marginBottom: 50
    },
    popupSelectionsWrapper:{
        justifyContent: "center",
        alignItems: "stretch",
    },
    popupSubCoreBtn:{
        margin: 5,
        padding: 20,
        borderRadius: 40,
        borderWidth: 1,
        justifyContent: "center",
        alignItems:"center",
        fontWeight: "bold"
    },
    popupProfileSelectionsWrapper:{
        flexDirection: "row",
        marginTop: 0,
        marginBottom: 8,
        alignItems: "stretch",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        borderRadius: 10
    },
    popupProfileLevels:{
        flex: 1,
        backgroundColor: "#ebebeb",
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10,
        marginBottom: -10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    popupProfileLevelsTxt:{
        backgroundColor: "#ebebeb",
        fontWeight: "bold",
        fontSize: 18
    },
    popupProfileDesc:{
        flex: 6,
        paddingLeft: 10
    }
});

export default CoreCompetenciesStyles;
