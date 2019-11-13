import {StyleSheet} from 'react-native';

let ProfileBtnStyles = StyleSheet.create({
    wrapper:{
        marginTop: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    touchOp:{
        padding: 0,
        marginLeft: 13,
        width: "100%",
        height: 200,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    BtnBgImg: {
        position: "absolute",
        top: 0,
        left: 0,
        height: 200,
        width: "100%",
        resizeMode: "contain",
    },
    BtnContentWrapper:{
        position: "absolute",
        top: 0,
        left: 0,
        height: 200,
        marginLeft: 30,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    profileImg:{
        height: 100,
        width: 100,
        borderRadius: 50
    },
    nameWrapper:{
        marginTop: -15,
    },
    name:{
        fontWeight: "bold",
        fontSize: 26,
        color: "white"
    },
    desc:{
        fontSize: 11,
        color: "white"
    },
    arrow:{
        width: 15,
        height: 15
    }
}
);

export default ProfileBtnStyles;
