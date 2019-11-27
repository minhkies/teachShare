import {StyleSheet} from 'react-native';

const CreateStyles=StyleSheet.create({
    wrapper:{
        height: "100%",
        backgroundColor: "#ffffff"
    },
    scrollableWrapper:{
        marginBottom: 60,
        paddingTop: 20
    },
    desc:{
        marginTop: 50,
        textAlign: "center",
        color: "gray"
    },
    btn:{
        height: 60,
        marginBottom: 30,
        borderRadius: 10,
        borderWidth: .5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#edfaff",
        borderColor: "#5dc1d8",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20
    },
    btnTxt:{
        color: "#5dc1d8"
    },
    popUpWrapper:{
        justifyContent: "flex-end"
    },
    popUp:{
        backgroundColor: "#f7f7f7",
        borderRadius: 15,
        alignItems: "center",
        width: "100%",
        height: 100,
        flexDirection: "row",

    },
    popUpAnimation:{
        width: 100,
        height: 100
    },
    popUpTxt:{
        marginLeft: -5
    }
});

export default CreateStyles
