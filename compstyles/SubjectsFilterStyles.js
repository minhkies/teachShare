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
        borderColor: "#007dff",
        color: "#007dff",
        backgroundColor: "#E5F4FF"
    },
    unselectedTxt:{
        borderColor: "#f7f7f7",
        color: "#7C7C81",
        backgroundColor: "#f7f7f7"
    }
});

export default SubjectsFilterStyles;
