import {StyleSheet, Platform} from 'react-native';

const NavbarStyles = StyleSheet.create({
    wrapper:{
        flexDirection: "row",
        width: "100%",
        height: 80,
        position: "absolute",
        bottom: 0,
        left: 0,
        alignItems: "center",
        marginBottom: -20,
        backgroundColor: "white",
        paddingTop: 10,
        paddingBottom: 30,
        ...Platform.select({
            ios: {
                justifyContent: "space-around",
                paddingLeft: 0,
                paddingRight: 0,
            },
            android: {
                justifyContent: "space-between",
                paddingLeft: 55,
                paddingRight: 55,
            },
        }),
    },
    iconWrapper:{
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        height: 18,
        width: 18,
        resizeMode: "stretch",
        justifyContent: "center",
        alignItems: "center"
    },
    txt:{
        paddingTop: 5,
        fontSize: 10,
        color: "black"
    },
    txtSelected:{
        paddingTop: 5,
        fontSize: 10,
        color: "#007dff"
    }
});

export default NavbarStyles;
