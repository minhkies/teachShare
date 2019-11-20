import {StyleSheet} from 'react-native';

const DropBoxStyles=StyleSheet.create({
    dropBoxWrapper:{
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 5
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

export default DropBoxStyles;
