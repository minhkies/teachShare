import {StyleSheet} from 'react-native';

const TxtWBoxStyles = StyleSheet.create({
    wrapper: {
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
    title: {
        marginTop: 5,
        marginBottom: 10
    },
    listWrapper: {
        marginTop: 10,
        marginLeft: 20
    },
    txt:{
        // color: "#5dc1d8",
        marginTop: 5
    }
});

export default TxtWBoxStyles;
