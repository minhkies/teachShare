import {StyleSheet} from 'react-native';

const NotificationsTagsStyles = StyleSheet.create({
    wrapper:{
        height: 70,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
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
        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: "#f7f7f7",
            },
            ios:{
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
            }
        })
    },
    icon:{
        width: 25,
        height: 25,
        marginRight: 10,
    },
    txt:{
        paddingRight: 40
    },
    boldTxt:{
        fontWeight: "bold",

    }
});

export default NotificationsTagsStyles;
