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
    }

});

export default PostStyles;
