import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert} from 'react-native';
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
import MultiTxtInpWBox from '../comps/MultiTxtInpWBox';
import TxtWBox from '../comps/TxtWBox';

export default function CreatePost() {

    const host = 'htin.postgres.database.azure.com:3001/post';

    const [selectedCoreCompetencies, setSelectedCoreCompetencies] = useState([null, null, null]);
    const [data, setData] = useState(false);
    const [curriculum, setCurriculum] = useState([]);
    const [selectedCurriculum, setSelectedCurriculum] = useState('');
    const [selectedGrade, setSelectedGrade] = useState('');
    const [subjects, setSubjects] = useState([]);
    const [selectedSubject, setSelectedSubject] = useState('');
    const [topics, setTopics] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState('');
    const [links, setLinks] = useState([]);
    const [desc, setDesc] = useState('');
    const [instruction, setInstruction] = useState('');
    const [remarks, setRemarks] = useState('');
    let [view, setView] = useState(1);
    let UserProfile;
    let [uid, setUid] = useState('');
    let [pid, setPid] = useState();
    let [uri, setUri] = useState('');
    let [photo, setPhoto] = useState('');
    let [selectedFiles, setSelectedFiles] = useState([]);
    let [uploadedFile, setUploadedFile] = useState([]);

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

    let submitImg = async () => {
        // const ref2 = firebase.storage().ref("profilePhoto");
        const file = uri;
        const name = pid;
        const ref2 = firebase.storage().ref().child('coverPhotos');
        const metadata = {contentType: file.type};
        const task = ref2.child(name).put(file, metadata);

        await task
            .then(snapshot =>
                setPhoto(snapshot.downloadURL));
        await updateImgLink();
    };

    let updateImgLink = async () => {
        let obj = {
            key: 'lesson_plans_update',
            data: {
                id: pid,
                img: photo,
            },
        };
        let data = await axios.post(host, obj);
    };

    let CreatePost = async () => {
        //fetch to the bd to create
        //the object (usually) you're sending over
        let obj = {
            key: 'lesson_plans_create',
            data: {
                subject: selectedSubject,
                grade: selectedGrade,
                topic: selectedTopic,
                uid: uid,
                description: desc,
                instruction: instruction,
                remarks: remarks,
                is_public: true,
                is_draft: false,
                learning_objs: '',
            },
        };

        // The link to the file that's doing query
        let data = await axios.post(host, obj);
        setPid(JSON.parse(data.data.body).data[0].id);
    };

    let CreateCompetencies = async () => {
        selectedCoreCompetencies.map((o, i) => {
            if (o !== null) {
                let comps = async () => {
                    let obj = {
                        key: 'competencies_create',
                        data: {
                            pid: pid,
                            core: o[0],
                            sub: o[1],
                            profile: o[2],
                        },
                    };
                    let data = await axios.post(host, obj);
                };
                comps();
            }
        });
    };

    let CreateLinks = async () => {
        links.map((o, i) => {
            let tempLink = async () => {
                let obj = {
                    key: 'links_create',
                    data: {
                        pid: pid,
                        link: o,
                    },
                };
                let data = await axios.post(host, obj);
            };
            tempLink();
        });
    };

    let submitFile = async () => {

        await selectedFiles.map((o,i)=>{
            let tempFile = async () =>{
                const file = o[1];
                const name = o[0];
                const ref2 = firebase.storage().ref().child('lp_files').child(pid);
                const metadata = {contentType: file.type};
                const task = ref2.child(name).put(file, metadata);

                await task
                    .then(snapshot =>
                        setUploadedFile(uploadedFile.concat(snapshot.downloadURL)),
                console.log("hahahaha", uploadedFile)
                    )
                    .catch((e)=>{{
                        Alert.alert("hihi", e.message);
                    }})

            };
            tempFile()
        });
        await CreateFiles();
    };

    let CreateFiles = async () => {
        console.log("huhuhuhu", uploadedFile);
        uploadedFile.map((o, i) => {
            console.log("hihihihi", o);
            let tempFile = async () => {
                let obj = {
                    key: 'files_create',
                    data: {
                        uid: uid,
                        pid: pid,
                        name: file[i][0],
                        file_link: o
                    },
                };
                let data = await axios.post(host, obj);
                console.log(data);
            };
            tempFile();
        });
    };

    useEffect(() => {
        submitFile();
        CreateCompetencies();
        CreateLinks();
        submitImg();
    }, [pid]);

    useEffect(()=>{
        console.log("run", selectedFiles)
    }, [selectedFiles]);

    // let ReadUsers = async () => {
    //     //fetch to the bd to read
    //     let obj = {
    //         key: 'lesson_plans_read',
    //         data: {},
    //     };
    //
    //     let data = await axios.post('http://142.232.170.187:3001/post', obj);
    //     console.log('read', JSON.parse(data.data.body));
    //     let dbUsers = JSON.parse(data.data.body).data;
    // };

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
                    setCoreCompetencies={setSelectedCoreCompetencies}
                    coreCompetencies={selectedCoreCompetencies}
                />
                <CreateBtn
                    page={view}
                    data={data}
                    setView={setView}
                />
            </View>
        );
    } else {
        return (
            <View style={[CreateStyles.wrapper]}>
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
                    <MultiTxtInpWBox
                        title={'instruction resource'}
                        placeholder={'resource links'}
                        setLinks={setLinks}
                        links={links}
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
                        setUri={setUri}
                    />
                    <TxtWBox
                        title={"Uploaded file(s)"}
                        selectedFiles={selectedFiles}
                        setSelectedFiles={setSelectedFiles}
                    />
                    <TouchableOpacity
                        style={CreateStyles.btn}
                        onPress={() => {
                            CreatePost();
                        }}>
                        <Text style={CreateStyles.btnTxt}>Post</Text>
                    </TouchableOpacity>
                </ScrollView>
                <CreateBtn
                    page={view}
                    data={data}
                    setView={setView}
                    selectedFiles={selectedFiles}
                    setSelectedFiles={setSelectedFiles}
                />
            </View>
        );
    }
}
