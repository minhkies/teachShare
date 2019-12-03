import {StyleSheet} from 'react-native';

const UserAvatarStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: 32,
        width: 32,
        borderRadius: 16,
        backgroundColor: "#ADC4D2"
    },
    img: {
        height: "100%",
        width: "100%",
        resizeMode: "stretch"
    },
    txt: {
        color: "white",
        fontSize: 18
    }
});

export default UserAvatarStyles;
