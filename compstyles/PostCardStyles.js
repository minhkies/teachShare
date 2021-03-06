import {StyleSheet} from 'react-native';

const PostCardStyles = StyleSheet.create({
    wrapper:{
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        borderColor: "#f7f7f7",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        padding: 10,
        paddingBottom: 0
    },
    topWrapper: {
        flexDirection: "row"
    },
    profileWrapper:{
        flexDirection: "row",
        alignItems: "center"
    },
    avatar:{
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10
    },
    coverImg:{
        height: 150,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        resizeMode: "cover"
    },
    topicTxt:{
        fontSize: 24,
        fontWeight: "bold"
    },
    subjectTxt:{
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 5,
        marginBottom: 15
    },
    comsWrapper:{
        paddingTop: 10,
        justifyContent: "flex-start",
    },
    comsCommCore:{
        backgroundColor: "#F7D1BE",
        paddingLeft: 10,
        height: 25,
        borderRadius: 12.5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 5,
        maxWidth: "100%",
        overflow: "hidden",
        justifyContent: "center",
    },
    comsCommSub:{
        flex: 1,
        backgroundColor: "#FBE9DF",
        flexDirection: "row",
        height: 25,
        borderRadius: 12.5,
        paddingLeft: 10,
        marginLeft: 10,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
    },
    comsCommProfile:{
        flex: 1,
        backgroundColor: "#FCF3EE",
        height: 25,
        borderRadius: 12.5,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
        overflow: "hidden"
    },
    statisticTag:{
        height: 40,
        backgroundColor: "#f7f7f7",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: "row",
        marginTop: 10,
        marginLeft: -10,
        marginRight: -10
    },
    timeTxt:{
        color: "#7C7C81",
    },
    leftTxt:{
        color: "#7C7C81",
    },
    leftWrapper:{
        flexDirection: "row"
    },
    statWrapper:{
        flexDirection: "row",
        marginRight: 10,
        alignItems: "center"
    },
    statIcon:{
        width: 15,
        height: 15,
        resizeMode: "contain",
        marginRight: 5
    },
    statTxt: {
        color: "#7C7C81"
    }

});

export default PostCardStyles;
