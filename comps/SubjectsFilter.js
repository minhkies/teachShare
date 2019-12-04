import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import SubjectsFilterStyles from '../compstyles/SubjectsFilterStyles';
import AsyncStorage from '@react-native-community/async-storage';

export default function SubjectsFilter({subjects, selectedSubjects, setSelectedSubjects, setC}) {
    let margin;
    let initSelect = [];
    let tempStyles=[];
    let [styles, setStyles] = useState([]);

    // let getData = async () => {
    //     try {
    //         tempSubjects = await AsyncStorage.getItem('teachingSubjects');
    //         if (tempSubjects !== null) {
    //              await setTeachingSubjects(JSON.parse(tempSubjects));
    //             teachingSubjects.map((o,i)=>{
    //                 setSelect(select.concat(false));
    //             })
    //         }
    //     } catch (e) {
    //     }
    // };

    let ShowOptions = ({subject, grade, ind}) => {
        if (ind===0){
            margin = 20
        } else {
            margin = 10
        }
        selectedSubjects[ind] ? styles[ind] = SubjectsFilterStyles.selectedTxt : styles[ind] = SubjectsFilterStyles.unselectedTxt;

        return(
            <TouchableOpacity style={{marginLeft: margin}}
                              onPress={()=>{
                                  handleClick(ind)
                              }}
            >
                <Text style={[SubjectsFilterStyles.txt, styles[ind]]}>{subject} {grade}</Text>
            </TouchableOpacity>
        )
    };

    let handleClick = (ind) => {
        setC(0);
        initSelect=selectedSubjects;
        initSelect[ind]=!initSelect[ind];
        selectedSubjects=[];
        // setSelectedSubjects(initSelect);
        setSelectedSubjects(selectedSubjects.concat(initSelect));
        initSelect.map((i)=>{
            selectedSubjects[i] ? tempStyles[i]=SubjectsFilterStyles.selectedTxt : tempStyles[i] = SubjectsFilterStyles.unselectedTxt;
        });
        setStyles(tempStyles);

    };


    // useEffect( ()=>{
    //     getData();
    // },[]);

    return(
        <View style={SubjectsFilterStyles.wrapper}>
            <Text style={SubjectsFilterStyles.title}>Your Subjects</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={SubjectsFilterStyles.selectionWrapper}
            >
                {
                    subjects.map((obj, ind)=>{
                        return <ShowOptions
                            key={ind}
                            ind={ind}
                            subject={obj.subject}
                            grade={obj.grade}
                        />
                    })
                }
            </ScrollView>
        </View>
    )
}
