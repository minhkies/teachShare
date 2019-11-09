import {StyleSheet} from 'react-native';

let CoreCompetenciesStyles = StyleSheet.create({
    wrapper:{
        marginLeft: 100,
        marginRight: 100
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
        backgroundColor: "rgba(255,255,255,.5)",
        justifyContent: "space-around",
        alignItems: "center"
    }
});

export default CoreCompetenciesStyles;
