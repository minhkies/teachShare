import {StyleSheet} from 'react-native';

const TxtInpWBoxStyles = StyleSheet.create({
    inpWrapper:{
        elevation : 10,
        borderRadius: 15,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    inpHeading:{
        marginTop: 5,
        marginBottom: 10
    },
    inp:{
        paddingLeft: 15,
        backgroundColor: "#ebebeb",
        borderRadius: 10
    },
    inpReg:{
        height: 60
    },
    inpMulti:{
        height: 180,
        textAlignVertical: "top"
    }
});

export default TxtInpWBoxStyles;
