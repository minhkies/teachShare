import {StyleSheet} from 'react-native';

const ProfileHeadingStyles = StyleSheet.create({
    wrapper:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 20
    },
    leftWrapper:{
        flexDirection: "row",
        alignItems: "center"
    },
    profileImg:{
        width: 80,
        height: 80,
        resizeMode: "cover",
        borderRadius: 50,
        marginRight: 10
    },
    nameTxt:{
        fontSize: 28,
        fontWeight: "bold"
    },
    arrowImg:{
        width: 15,
        height: 15
    }
});

export default ProfileHeadingStyles
