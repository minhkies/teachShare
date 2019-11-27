import {StyleSheet} from 'react-native';
const SearchBarStyles = StyleSheet.create({
    wrapper:{
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
        marginBottom: 15
    },
    img:{
        marginLeft: 10,
        width: 15,
        height: 15,
        resizeMode: "contain"
    },
    txtInp:{
        marginLeft: -25,
        paddingLeft: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#f7f7f7",
        width: "100%"
    }
});

export default SearchBarStyles;
