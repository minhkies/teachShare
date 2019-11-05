import React, {useState, useEffect} from 'react';
import  {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import SubjectsFilterStyles from '../compstyles/SubjectsFilterStyles';

export default function SubjectsFilter() {
    let currentUser=[
        {
            subjects: [
                {
                    sub: "Geography",
                    grade: 12
                },
                {
                    sub: "Social Study",
                    grade: 11
                },
                {
                    sub: "Programming",
                    grade: 12
                }
            ]
        }
    ];




    return(
        <View style={SubjectsFilterStyles.wrapper}>
            <Text style={SubjectsFilterStyles.title}>Your Subjects</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={SubjectsFilterStyles.selectionWrapper}
            >
                {
                    currentUser[0].subjects.map((obj, ind)=>{
                        let margin;
                        if (ind===0){
                            margin = 20
                        } else {
                            margin = 10
                        }
                        const handleBtn = () => {
                            let [select, setSelect] = useState(true);
                            let tagStyles = null;
                            useEffect(()=>{
                                if (select===true){
                                    tagStyles = SubjectsFilterStyles.selectedTxt;
                                } else {
                                    tagStyles = SubjectsFilterStyles.unselectedTxt;
                                }
                            })
                        };
                        return(
                            <TouchableOpacity style={{marginLeft: margin}}
                                onPress={()=>{
                                    handleBtn()
                                }}
                            >
                                <Text style={[SubjectsFilterStyles.txt, tagStyles]}>{obj.sub} {obj.grade}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}
