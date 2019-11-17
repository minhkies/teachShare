import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import SubjectsFilterStyles from '../compstyles/SubjectsFilterStyles';
import AsyncStorage from '@react-native-community/async-storage';

export default function SubjectsFilter() {
    let margin;
    let initSelect = [];
    let tempStyles=[];
    let [select, setSelect] = useState([]);
    let [styles, setStyles] = useState([]);
    let tempSubjects;
    let [teachingSubjects, setTeachingSubjects]=useState([]);

    let getData = async () => {
        try {
            tempSubjects = await AsyncStorage.getItem('teachingSubjects');
            if (tempSubjects !== null) {
                 setTeachingSubjects(JSON.parse(tempSubjects));
            }
        } catch (e) {
        }
    };

    for (let i=0; i < teachingSubjects.length; i++){
        initSelect.push(true);
    }

    let ShowOptions = ({subject, grade, ind}) => {
        if (ind===0){
            margin = 20
        } else {
            margin = 10
        }

        return(
            <TouchableOpacity style={{marginLeft: margin}}
                              onPress={()=>{
                                  HandleClick(ind)
                              }}
            >
                <Text style={[SubjectsFilterStyles.txt, SubjectsFilterStyles.selectedTxt, styles[ind]]}>{subject} {grade}</Text>
            </TouchableOpacity>
        )
    };

    let HandleClick = (ind) => {
        initSelect=select;
        initSelect[ind]=!initSelect[ind];
        setSelect(initSelect);
        for (let i = 0; i < initSelect.length; i++){
            initSelect[i] ? tempStyles[i]=SubjectsFilterStyles.selectedTxt : tempStyles[i] = SubjectsFilterStyles.unselectedTxt;
            select[i] ? tempStyles[i]=SubjectsFilterStyles.selectedTxt : tempStyles[i] = SubjectsFilterStyles.unselectedTxt;
        }
        setStyles(tempStyles);
    };


    useEffect(()=>{
        getData();
        for (let i=0; i <teachingSubjects.length; i++){
            initSelect.push(true);
        }
        setSelect(initSelect);
    },[]);

    return(
        <View style={SubjectsFilterStyles.wrapper}>
            <Text style={SubjectsFilterStyles.title}>Your Subjects</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={SubjectsFilterStyles.selectionWrapper}
            >
                {
                    teachingSubjects.map((obj, ind)=>{
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
