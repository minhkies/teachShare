import {StyleSheet} from 'react-native';

const DropBoxWBoxStyles=StyleSheet.create({
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
    title:{
        marginTop: 5,
        marginBottom: 10
    },
    dropBoxWrapper:{
        borderRadius: 10,
        overflow: "hidden"
    },
    dropBoxInp:{
        height: 60,
        width: "100%",
        backgroundColor: "#f7f7f7",
        borderRadius: 10,
    },
    dropdownIcon:{
        height: 15,
        width: 15,
        transform: [{rotate: "90deg"}],
        position: "absolute",
        right: 15,
        top: 22.5
    },
    placeholder:{
        color: "#ebebeb"
    }
});

export default DropBoxWBoxStyles;
