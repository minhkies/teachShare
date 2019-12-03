import {StyleSheet} from 'react-native';

const CardStyles = StyleSheet.create({
    container: {
        padding: 5
    },
    cardTitleContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    cardTitleTxt: {
        marginLeft: 5,
        flex: 1
    },
    cardTitleBtnImg: {
        width: 24,
        height: 24
    },
    img: {
        width: "100%",
        height: 150,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    },
    titleTxt: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5
    },
    description: {
        fontSize: 10,
        marginTop: 2
    },
    content: {
        fontSize: 12,
        marginTop: 5,
        marginBottom: 10
    },
    cardIconsWrapper: {
        flexDirection: "row",
        backgroundColor: "#EAF9E1",
        borderRadius: 20,
        padding: 5,
        marginLeft: 5,
        marginRight: 5,
        alignItems: "center"
    },
    cardIconWrapper: {
        flexDirection: "row",
        padding: 5
    },
    cardIconImg: {
        width: 16,
        height: 16,
        resizeMode: "stretch"
    },
    cardIconTxt: {
        marginLeft: 2,
        color: "gray"
    },
    CardIconTime: {
        flex: 1, 
        textAlign: "right",
        marginRight: 10,
        color: "gray"
    }
});

export default CardStyles;
