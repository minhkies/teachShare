import {StyleSheet} from 'react-native';

const PostStyles = StyleSheet.create({
    wrapper:{
        backgroundColor: "white",
        marginBottom: 60,
        padding: 20
    },
    topBarWrapper:{
        marginBottom: 20,
    },
    profileWrapper:{
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        marginBottom: 10
    },
    avaWrapper:{
        width: 60,
        height: 60,
        marginRight: 10
    },
    avaImg:{
        width: 60,
        height: 60,
        borderRadius: 30,

    },
    dateTxt:{
        color: "#cecece",
        fontSize: 12
    },
    img:{
        height: 150,
        marginBottom: 20,
        borderRadius: 10,
        resizeMode: "cover"
    },
    topicTxt:{
        fontWeight: "bold",
        fontSize: 26
    },
    subjectGradeTxt:{
        fontWeight: "bold",
        fontSize: 16
    },
    competenciesWrapper:{
        marginTop: 10
    },
    contentWrapper:{
        marginTop: 10,
    },
    title:{
        fontWeight: "bold",
        fontSize: 14
    },
    links:{
        color: "blue"
    },
    btnWrapper:{
        paddingTop: 20,
        paddingBottom: 20,
        borderColor: "#ebebeb",
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    btn:{
        width: "100%",
        height: 60,
        borderRadius: 10,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 5
    },
    unselectedAppBtn:{
        backgroundColor: "#EDFAFF",
        borderColor: "#5DC1D8"
    },
    unselectedAppTxt:{
        color: "#5DC1D8"
    },
    selectedAppBtn:{
        backgroundColor: "#5DC1D8",
        borderColor: "#5DC1D8"
    },
    selectedAppTxt:{
        color: "#EDFAFF"
    },
    unselectedSaveBtn:{
        backgroundColor: "#FEF6EB",
        borderColor: "#D3B594"
    },
    unselectedSaveTxt:{
        color: "#D3B594"
    },
    selectedSaveBtn:{
        backgroundColor: "#D3B594",
        borderColor: "#D3B594"
    },
    selectedSaveTxt:{
        color: "#FEF6EB"
    },
    shareBtn:{
        backgroundColor: "#F2F9EA",
        borderColor: "#AABC8B"
    },
    shareTxt:{
        color: "#AABC8B"
    },
    cmtInpWrapper:{
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
    },
    cmtInp:{
        backgroundColor: "#f7f7f7",
        borderRadius: 10,
        height: 160,
        textAlignVertical: "top",
        width: "100%"
    },
    cmtBtnWrapper:{
        position: "absolute",
        top: 95,
        width: "97%",
        marginLeft: 5,
        marginRight: 5
    },
    cmtBtn:{
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EDFAFF",
        borderColor: "#5DC1D8",
        borderWidth: 1,
        borderRadius: 10
    },
    cmtTxt:{
        color: "#5DC1D8"
    }




});

export default PostStyles;
