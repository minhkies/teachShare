import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import SubjectsFilterStyles from '../compstyles/SubjectsFilterStyles';

export default function SubjectsFilter() {
    let margin;
    let initSelect = [];
    let tempStyles=[];
    let [select, setSelect] = useState([]);
    let [styles, setStyles] = useState([]);

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

    let ShowOptions = ({subject, grade, i}) => {
        if (i===0){
            margin = 20
        } else {
            margin = 10
        }

        return(
            <TouchableOpacity style={{marginLeft: margin}}
                              onPress={()=>{
                                    HandleClick(i)
                              }}
            >
                <Text style={[SubjectsFilterStyles.txt, SubjectsFilterStyles.selectedTxt, styles[i]]}>{subject} {grade}</Text>
            </TouchableOpacity>
        )
    };

    let HandleClick = (i) => {
        initSelect=select;
        initSelect[i]=!initSelect[i];
        setSelect(initSelect);
        for (let x = 0; x < initSelect.length; x++){
            select[x] ? tempStyles[x]=SubjectsFilterStyles.selectedTxt : tempStyles[x] = SubjectsFilterStyles.unselectedTxt
        }
        setStyles(tempStyles);
    };

    useEffect(()=>{
        for (let i=0; i <currentUser[0].subjects.length; i++){
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
                    currentUser[0].subjects.map((obj, i)=>{
                        return <ShowOptions
                            key={i}
                            ind={i}
                            subject={obj.sub}
                            grade={obj.grade}
                        />
                    })
                }
            </ScrollView>
        </View>
    )
}
