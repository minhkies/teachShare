import {StyleSheet} from 'react-native';

const LoadingStyles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    top:{
        flex: 8,
        resizeMode: "contain"
    },
    bottom:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    logo:{
        height: 50,
        width: 100,
        resizeMode: "contain"
    },
    txt:{
        color: "gray",
        fontSize: 10
    }
});

export default LoadingStyles
