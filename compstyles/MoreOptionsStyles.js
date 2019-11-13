import {StyleSheet} from 'react-native';

const MoreOptionsStyles = StyleSheet.create({
    wrapper:{
        width: "100%",
        paddingTop: 10,
        paddingBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    leftComps:{
        flexDirection: "row",
        alignItems: "center"
    },
    img:{
        width: 20,
        height: 20,
        marginRight: 10
    },
    arrow:{
        width: 15,
        height: 15
    }

});

export default MoreOptionsStyles;
