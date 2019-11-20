import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
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
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

export default function CreatePost() {
    const [data, setData] = useState(false);
    const [curriculum, setCurriculum] = useState([]);
    const [selectedCurriculum, setSelectedCurriculum] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [links, setLinks] = useState('');
    const [desc, setDesc] = useState('');
    const [instruction, setInstruction] = useState('');
    const [remarks, setRemarks] = useState('');
    const [img, setImg] = useState('');
    let [view, setView] = useState(1);
    let UserProfile;
    let [uid, setUid] = useState('');

    let getData = async () => {
        let tempUid;
        try {
            tempUid = await AsyncStorage.getItem('uid');
            setUid(tempUid);
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };

    function getCurriculum() {
        let tempCurriculumArray = [];
        firestore()
            .collection('Curriculum').onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const tempCurriculum = doc.id;
                tempCurriculumArray.push(tempCurriculum);
            });
            setCurriculum(tempCurriculumArray);
        });
    }

    function getSubjects() {
        let tempSubjectsArray = [];
        firestore()
            .collection('Curriculum').doc(selectedCurriculum).collection(selectedGrade).onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const tempSubjects = doc.id;
                tempSubjectsArray.push(tempSubjects);
            });
            setSubjects(tempSubjectsArray);
        });
    }

    function getTopics() {
        firestore()
            .collection('Curriculum').doc(selectedCurriculum).collection(selectedGrade).doc(selectedSubject).get().then(function (doc) {
            setTopics(doc.data().Topics);
        });
    }

    let CreatePost = async () => {
        //fetch to the bd to create
        //the object (usually) you're sending over
        console.log(selectedGrade, selectedSubject, selectedTopic, instruction, remarks, uid);
        let obj = {
            key: 'les_create',
            data: {
                subject: selectedSubject,
                grade: selectedGrade,
                topic: selectedTopic,
                uid: uid,
                img: "",
                desc: desc,
                instruction: instruction,
                remarks: remarks,
                public: true,
                draft: false,
                learningObjs: '',
            },
        };

        // The link to the file that's doing query
        let data = await axios.post('http://142.232.160.229:3001/post', obj);
        console.log('create', data);
    };

    let ReadUsers = async () => {
        //fetch to the bd to read
        let obj = {
            key: 'users_read',
            data: {},
        };

        let data = await axios.post('http://142.232.160.229:3001/post', obj);
        console.log('read', JSON.parse(data.data.body));
        let dbUsers = JSON.parse(data.data.body).data;
        setUsers(dbUsers);
    };


    useEffect(() => {
        getData();
        getCurriculum();
    }, []);

    useEffect(() => {
        if (selectedGrade !== '' && selectedCurriculum !== '') {
            getSubjects();
        }
    }, [selectedGrade]);

    useEffect(() => {
        if (selectedGrade !== '' && selectedCurriculum !== '') {
            getSubjects();
        }
    }, [selectedCurriculum]);

    useEffect(() => {
        if (selectedSubject !== '') {
            getTopics();
        }
    }, [selectedSubject]);

    if (view === 1) {
        return (
            <View style={CreateStyles.wrapper}>
                <PageTitle
                    title={'Create'}
                    msg={'Create a lesson plan'}
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
        );
    } else {
        return (
            <ScrollView
                style={[CreateStyles.wrapper, CreateStyles.scrollableWrapper]}
                showsVerticalScrollIndicator={false}>
                <DropBoxWBox
                    title={'curriculum'}
                    data={curriculum}
                    select={setSelectedCurriculum}
                />
                <DropBoxWBox
                    title={'grade'}
                    data={['10', '11', '12']}
                    select={setSelectedGrade}
                />
                <DropBoxWBox
                    title={'subjects'}
                    data={subjects}
                    select={setSelectedSubject}
                />
                <DropBoxWBox
                    title={'learning topic'}
                    data={topics}
                    select={setSelectedTopic}
                />
                <TxtInpWBox
                    title={'description'}
                    placeholder={'Brief description/ introduction'}
                    multiline={true}
                    set={setDesc}
                />
                <TxtInpWBox
                    title={'instruction resources'}
                    placeholder={'Links, separate by line'}
                    multiline={true}
                    set={setLinks}
                />
                <TxtInpWBox
                    title={'instruction'}
                    placeholder={'additional instruction'}
                    multiline={true}
                    set={setInstruction}
                />
                <TxtInpWBox
                    title={'remarks'}
                    placeholder={'remarks'}
                    multiline={true}
                    set={setRemarks}
                />
                <ImgOptions
                    title={'cover image'}
                    type={'create'}
                    topic={selectedSubject}
                    setUri={setImg}
                />
                <TouchableOpacity
                    style={{height: 100, backgroundColor: '#FAB'}}
                    onPress={() => {
                        CreatePost();
                    }}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </ScrollView>
        );
    }
}
