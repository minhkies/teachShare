import {StyleSheet} from 'react-native';

const SubjectsFilterStyles=StyleSheet.create({
    wrapper:{
        marginTop: 15,

    },
    title:{
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 5
    },
    selectionWrapper:{
        flexDirection: "row",
    },
    txt:{
        padding: 15,
        paddingTop: 5,
        paddingBottom: 5,
        borderWidth: 1,
        borderColor: "#007dff",
        borderRadius: 20
    },
    selectedTxt:{
        color: "white",
        backgroundColor: "#007dff"
    },
    unselectedTxt:{
        color: "#007dff",
        backgroundColor: "#f5faff"
    }
});

export default SubjectsFilterStyles;
