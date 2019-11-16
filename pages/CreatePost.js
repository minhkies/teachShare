import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import PageTitle from '../comps/PageTitle';
import CoreCompetenciesSelections from '../comps/CoreCompetencies';
import CreateStyles from '../styles/CreateStyles';
import CreateBtn from '../comps/CreateBtn';
import DropBoxWBox from '../comps/DropBoxWBox';
import TxtInpWBox from '../comps/TxtInpWithBox';
import ImgOptions from '../comps/ImgOptions';

export default function CreatePost(){
    const [data, setData] = useState(false);
    const [curriculum, setCurriculum] = useState([]);
    const [selectedCurriculum, setSelectedCurriculum] = useState("");
    const [selectedGrade, setSelectedGrade] = useState("");
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState("");
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState("");
    const [links, setLinks] = useState("");
    const [instruction, setInstruction] = useState("");
    const [remarks, setRemarks] = useState("");
    let [view, setView] = useState(1);

    function getCurriculum() {
        let tempCurriculumArray =[];
        firestore()
            .collection('Curriculum').onSnapshot(querySnapshot=>{
            querySnapshot.forEach(doc => {
                const tempCurriculum = doc.id;
                tempCurriculumArray.push(tempCurriculum)
            });
                setCurriculum(tempCurriculumArray);
        });
    }

    function getSubjects() {
        let tempSubjectsArray = [];
        firestore()
            .collection('Curriculum').doc(selectedCurriculum).collection(selectedGrade).onSnapshot(querySnapshot=>{
            querySnapshot.forEach(doc => {
                const tempSubjects = doc.id;
                tempSubjectsArray.push(tempSubjects)
            });
                setSubjects(tempSubjectsArray);
        });
    }

    function getTopics() {
        firestore()
            .collection('Curriculum').doc(selectedCurriculum).collection(selectedGrade).doc(selectedSubject).get().then(function (doc) {
            setTopics(doc.data().Topics)
        });
    }



    useEffect(()=>{
        getCurriculum();
    },[]);

    useEffect(()=>{
        if (selectedGrade!==""){
            getSubjects();
        }
    }, [selectedGrade]);

    useEffect(()=>{
        if (selectedSubject!==""){
            getTopics();
        }
    }, [selectedSubject]);

    // console.log(selectedCurriculum);
    // console.log(selectedGrade);
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
            <ScrollView style={{marginBottom: 60}}>
                <DropBoxWBox
                    title={"curriculum"}
                    data={curriculum}
                    select={setSelectedCurriculum}
                />
                <DropBoxWBox
                    title={"grade"}
                    data={["10","11","12"]}
                    select={setSelectedGrade}
                />
                <DropBoxWBox
                    title={"subjects"}
                    data={subjects}
                    select={setSelectedSubject}
                />
                <DropBoxWBox
                    title={"learning topic"}
                    data={topics}
                    select={setSelectedTopic}
                />
                <TxtInpWBox
                    title={"instruction resources"}
                    placeholder={"Links"}
                    multiline={true}
                    set={setLinks}
                />
                <TxtInpWBox
                    title={"instruction"}
                    placeholder={"additional instruction"}
                    multiline={true}
                    set={setInstruction}
                />
                <TxtInpWBox
                    title={"remarks"}
                    placeholder={"remarks"}
                    multiline={true}
                    set={setRemarks}
                />
                <ImgOptions
                    title={"cover image"}
                    type={"create"}
                    topic = {selectedSubject}
                />
            </ScrollView>
        )
    }
}
