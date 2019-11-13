import {StyleSheet} from 'react-native';

const NotificationsTagsStyles = StyleSheet.create({
    wrapper:{
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    icon:{
        width: 25,
        height: 25,
        marginRight: 10,
    },
    boldTxt:{
        fontWeight: "bold",

    }
});

export default NotificationsTagsStyles;