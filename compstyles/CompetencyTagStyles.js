import {StyleSheet} from 'react-native';

const CompetencyTagStyles = StyleSheet.create({
    comsCore:{
        flexDirection: "row",
        height: 26,
        alignItems: "center",
        borderRadius: 13,
        alignSelf: "flex-start",
        paddingLeft: 10,
        paddingRight: 1,
        marginBottom: 5,
        maxWidth: "100%",
    },
    comsSub:{
        flexDirection: "row",
        marginLeft: 5,
        height: 24,
        alignItems: "center",
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight: 1,
        flexShrink: 2
    },
    comsProfile:{
        height: 22,
        width: 22,
        borderRadius: 11,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 5,
    },
    comsCoreTxt:{
        flexShrink: 2
    },
    comsSubTxt:{
        flexShrink: 2
    },
    comsCommCore:{
        backgroundColor: "#F8C2A0",
    },
    comsCommSub:{
        backgroundColor: "#FAD6BE"
    },
    comsCommProfile:{
        backgroundColor: "#FBEBDE"
    },
    comsThinkCore: {
        backgroundColor: "#8DC1E8",
    },
    comsThinkSub:{
        backgroundColor: "#B6D2EF"
    },
    comsThinkProfile:{
        backgroundColor: "#DFE7F4"
    },
    comsSocialCore:{
        backgroundColor: "#B6DBA7",
    },
    comsSocialSub:{
        backgroundColor: "#CDE6BF"
    },
    comsSocialProfile:{
        backgroundColor: "#E2EFDB"
    }
});

export default CompetencyTagStyles;
