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
        paddingBottom: 30,
        ...Platform.select({
            ios: {
                justifyContent: "space-around",
                paddingLeft: 0,
                paddingRight: 0,
            },
            android: {
                justifyContent: "space-between",
                paddingLeft: 60,
                paddingRight: 60,
            },
        }),
    },
    iconWrapper:{
        justifyContent: "center",
        alignItems: "center"
    },
    icon:{
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    txt:{
        paddingTop: 5,
        fontSize: 11,
        color: "black"
    },
    txtSelected:{
        paddingTop: 5,
        fontSize: 11,
        color: "#007dff"
    }
});

export default NavbarStyles;
