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
        elevation: 1,
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
        backgroundColor: "#ebebeb",
        width: "100%"
    }
});

export default SearchBarStyles;
