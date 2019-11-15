import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import PageTitle from '../comps/PageTitle';
import CoreCompetenciesSelections from '../comps/CoreCompetencies';
import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';
import CreateStyles from '../styles/CreateStyles';
import CreateBtn from '../comps/CreateBtn';
import DropBoxWithBox from '../comps/DropboxWithBox';

export default function CreatePost(){
    const [data, setData] = useState(false);
    const [curriculum, setCurriculum] = useState([]);
    const [selectedCurriculum, setSelectedCurriculum] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    let [view, setView] = useState(1);

    async function getCurriculum() {
        let tempCurriculumArray =[];
        await firestore()
            .collection('Curriculum')
            .onSnapshot(querySnapshot=>{
            querySnapshot.forEach(doc => {
                const tempCurriculum = doc.id;
                tempCurriculumArray.push(tempCurriculum)
            })
        });
        setCurriculum(tempCurriculumArray);
    }

    async function getSubjects() {
        let tempSubjectsArray =[];
        await firestore()
            .collection('Curriculum')
            .doc(selectedCurriculum)
            .collection(selectedGrade)
            .onSnapshot(querySnapshot=>{
            querySnapshot.forEach(doc => {
                const tempSubjects = doc.id;
                tempSubjectsArray.push(tempSubjects)
            })
        });
        setSubjects(tempSubjectsArray);
    }



    useEffect(()=>{
        getCurriculum();
    },[]);


    console.log(selectedCurriculum);
    console.log(selectedGrade);
    if (view === 1){
        return(
            <View style={CreateStyles.wrapper}>
                <PageTitle
                    title={"Create"}
                    msg={"Create a lesson plan"}
                />
                <Text style={CreateStyles.desc}>Select one or multiple competencies to continue</Text>
                <CoreCompetenciesSelections
                    setData={setData}
                />
                <CreateBtn
                    data={data}
                    setView={setView}
                />
            </View>
        )
    } else {
        return(
            <ScrollView>
                <DropBoxWithBox
                    title={"curriculum"}
                    data={curriculum}
                    select={setSelectedCurriculum}
                    nextFunc={()=>{}}
                />
                <DropBoxWithBox
                    title={"grade"}
                    data={["10","11","12"]}
                    select={setSelectedGrade}
                    nextFunc={getSubjects}
                />
                <DropBoxWithBox
                    title={"learning topic"}
                    data={subjects}
                    select={setSelectedSubject}
                    nextFunc={()=>{}}
                />
            </ScrollView>

        )
    }
}
