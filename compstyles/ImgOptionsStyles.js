import {StyleSheet} from 'react-native';

const ImgOptionsStyles=StyleSheet.create({
    wrapper:{
        elevation : 10,
        borderRadius: 15,
        backgroundColor: "white",
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20
    },
    title:{
        marginTop: 5,
        marginBottom: 10
    },
    selectionWrapper:{
        flexDirection: "row"
    },
    btn:{
        flex: 1,
        height: 60,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#ebebeb",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ebebeb"
    },
    autoBtn:{
        marginRight: 5
    },
    btnTxt:{
        color: "#7C7C81"
    },
    unselectedBtn:{
        borderColor: "#ebebeb",
        backgroundColor: "#ebebeb"
    },
    unselectedBtnTxt:{
        color: "#7C7C81"
    },
    selectedBtn:{
        borderColor: "#007DFF",
        backgroundColor: "#E5F4FF"
    },
    selectedTxt:{
        color: "#007DFF"
    }
});

export default ImgOptionsStyles;
