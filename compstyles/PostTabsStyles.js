import {StyleSheet} from 'react-native';

const PostTabsStyles = StyleSheet.create({
    wrapper:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        paddingBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        borderBottomColor: "#ebebeb",
        borderBottomWidth: 1
    },
    tabWrapper:{
        justifyContent: "center",
        alignItems: "center"
    },
    unSelectedTabTxt:{
        color: "black",
        fontWeight: "normal"
    },
    selectedTabTxt:{
        color: "#007DFF",
        fontWeight: "bold"
    }
});

export default PostTabsStyles
