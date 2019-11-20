import {StyleSheet} from 'react-native';

const TxtInpWBoxStyles = StyleSheet.create({
    inpWrapper:{
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
    inp:{
        paddingLeft: 15,
        backgroundColor: "#f7f7f7",
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
