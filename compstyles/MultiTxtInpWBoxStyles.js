import {StyleSheet} from 'react-native';

const MulTxtInpWBoxStyles = StyleSheet.create({
    wrapper:{
        borderRadius: 15,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        ...Platform.select({
            android: {
                borderWidth: 1,
                borderColor: "#f7f7f7",
            }
        })
    },
    inpHeading:{
        marginTop: 5,
        marginBottom: 10
    },
    inpWrapper:{
       flexDirection: "row",
       justifyContent: "center",
       alignItems: "stretch"
    },
    inp:{
        flex: 4,
        marginRight: 10,
        paddingLeft: 15,
        backgroundColor: "#f7f7f7",
        borderRadius: 10,
        height: 60
    },
    btn:{
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        backgroundColor: "#edfaff",
        borderColor: "#5dc1d8",
        justifyContent: "center",
        alignItems: "center"
    },
    btnTxt:{
        color: "#5dc1d8"
    },
    listWrapper:{
        marginTop: 10,
        marginLeft: 10
    },
    link:{
        color: "#5dc1d8",
       marginTop: 5
    }

});

export default MulTxtInpWBoxStyles;
