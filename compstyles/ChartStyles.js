import {StyleSheet} from 'react-native';

const ChartStyles = StyleSheet.create({
    view: {

    },
    scrollView: {
        flexDirection: "row",
    },
    rect: {
        margin: 5,
        width:130,
        height:90,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 5
    },
    txt:{
        color: "white"
    }
});

export default ChartStyles;
