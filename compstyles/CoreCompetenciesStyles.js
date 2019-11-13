import {StyleSheet} from 'react-native';

let CoreCompetenciesStyles = StyleSheet.create({
    wrapper:{
        marginLeft: 100,
        marginRight: 100,
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
        color: "#F58855",
        borderColor: "#F58855",
        backgroundColor: "#FBEBDE"
    },
    btnThinking:{
        color: "#009ADA",
        borderColor: "#009ADA",
        backgroundColor: "#DFE7F4"
    },
    btnSocial:{
        color: "#4FB76E",
        borderColor: "#4FB76E",
        backgroundColor: "#E2EFDB"
    },
    btnCommunicationSelected:{
        color: "white",
        borderColor: "#F58855",
        backgroundColor: "#F58855"
    },
    btnThinkingSelected:{
        color: "white",
        borderColor: "#009ADA",
        backgroundColor: "#009ADA"
    },
    btnSocialSelected:{
        color: "white",
        borderColor: "#4FB76E",
        backgroundColor: "#4FB76E"
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
        marginTop: 5,
        marginBottom: 5,
        alignItems: "stretch",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        borderRadius: 10
    },
    popupProfileLevels:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -10,
        marginBottom: -10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    popupProfileLevelsTxt:{
        color: "white",
        fontWeight: "bold",
        fontSize: 18
    },
    popupProfileDesc:{
        flex: 6,
        paddingLeft: 10
    }
});

export default CoreCompetenciesStyles;
