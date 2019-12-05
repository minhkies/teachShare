import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Alert, ToastAndroid} from 'react-native';
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
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';

export default function CreatePost() {

    // const host = 'https://htin.postgres.database.azure.com:3001/post';
    // const host = 'http://142.232.162.210:3001/post';
    // const host = 'http://192.168.1.90:3001/post';
    const host = "https://teachsharek12ss.herokuapp.com/post";

    let [selectedCoreCompetencies, setSelectedCoreCompetencies] = useState([null, null, null]);
    let [data, setData] = useState(false);
    let [curriculum, setCurriculum] = useState([]);
    let [selectedCurriculum, setSelectedCurriculum] = useState('');
    let [selectedGrade, setSelectedGrade] = useState('');
    let [subjects, setSubjects] = useState([]);
    let [selectedSubject, setSelectedSubject] = useState('');
    let [topics, setTopics] = useState([]);
    let [selectedTopic, setSelectedTopic] = useState('');
    let [links, setLinks] = useState([]);
    let [desc, setDesc] = useState('');
    let [instruction, setInstruction] = useState('');
    let [remarks, setRemarks] = useState('');
    let [view, setView] = useState(1);
    let [uid, setUid] = useState('');
    let [uri, setUri] = useState('');
    let [selectedFiles, setSelectedFiles] = useState([]);
    let [uploadedFile, setUploadedFile] = useState([]);
    let [loading, setLoading] = useState(false);
    let pid;

    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    };

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

    let inputValidation = async () => {
        let msg = '';
        if (selectedCoreCompetencies === [null, null, null]) {
            msg = 'please selected at least a core competencies';
        } else if (selectedCurriculum === null || selectedCurriculum === '') {
            msg = 'please select enter a valid curriculum';
        } else if (selectedSubject === null || selectedSubject === '') {
            msg = 'please enter a valid subject';
        } else if (selectedGrade === null || selectedGrade === '') {
            msg = 'please enter a valid grade';
        } else if (selectedTopic === null || selectedTopic === '') {
            msg = 'please enter a valid learning topic';
        } else if (desc === null || desc === '') {
            msg = 'please enter a description';
        } else if (links === [] || links === null || links === '' || selectedFiles === [] || selectedFiles === null || selectedFiles === '') {
            msg = 'please enter at least one link or file';
        }

        if (msg !== '') {
            ToastAndroid.show(capitalize(msg), ToastAndroid.LONG, ToastAndroid.BOTTOM);
            return false;
        } else {
            setLoading(true);
            await createPost();
        }
    };

    const getCurriculum = () => {
        let tempCurriculumArray = [];
        firestore()
            .collection('Curriculum').onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const tempCurriculum = doc.id;
                tempCurriculumArray.push(tempCurriculum);
            });
            setCurriculum(tempCurriculumArray);
        });
    };

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
        const file = uri;
        const name = pid;
        const ref2 = firebase.storage().ref().child('coverPhotos');
        const metadata = {contentType: file.type};
        const task = ref2.child(name).put(file, metadata);

        await task
            .then((snapshot) => {
                updateImgLink(snapshot.downloadURL);
            });
    };

    let updateImgLink = async (photo) => {
        let obj = {
            key: 'lesson_plans_update',
            data: {
                id: pid,
                img: photo,
            },
        };
        let data = await axios.post(host, obj);
    };


    let createPost = async () => {
        let obj = {
            key: 'lesson_plans_create',
            data: {
                subject: selectedSubject,
                grade: selectedGrade,
                topic: selectedTopic,
                img: "",
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
        pid = JSON.parse(data.data.body).data[0].id;
        runTasks().then(()=>{
            setLoading(false);
            Actions.home();
        })
    };

    let createCompetencies = async () => {
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

    let createLinks = async () => {
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
        let files = [];
        console.log("tttttt", selectedFiles);
        for (let i=0; i < selectedFiles.length; i++){
            let tempFile = async () => {
                const file = selectedFiles[i][1];
                const name = selectedFiles[i][0];
                const ref2 = firebase.storage().ref().child('lp_files').child(pid);
                const metadata = {contentType: file.type};
                const task = ref2.child(name).put(file, metadata);

                await task
                    .then(snapshot =>
                        files = [selectedFiles[i][0], snapshot.downloadURL]
                    )
                    .catch((e) => {
                        {
                            Alert.alert(e.message);
                        }
                    });
                return files;
            };

            await tempFile().then(async (r)=>{
                console.log("haha", r);
                try {
                    await axios.post(host, {
                        key: "files_create",
                        data:{
                            uid: uid,
                            pid: pid,
                            name: r[0],
                            file_link: r[1],
                        }

                    });
                }
                catch (e) {
                    alert(e.message)
                }

            });
        }

    };



    let runTasks = async () => {
        await submitImg();
        await submitFile();
        await createCompetencies();
        await createLinks();
    };

        // useEffect(async () => {
        //     await runTasks().then(() => {
        //         setLoading(false);
        //         Actions.home();
        //     })
        // }, [pid]);


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
                            title={'Uploaded file(s)'}
                            selectedFiles={selectedFiles}
                            setSelectedFiles={setSelectedFiles}
                        />
                        <TouchableOpacity
                            style={CreateStyles.btn}
                            onPress={() => {
                                inputValidation();
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
                    <Modal
                        // style={CreateStyles.modal}
                        isVisible={loading}
                        coverScreen={true}
                        animationIn={'slideInUp'}
                        animationOut={'slideInDown'}
                        animationInTiming={500}
                        animationOutTiming={500}
                        backdropOpacity={0.2}
                        style={CreateStyles.popUpWrapper}
                    >
                        <View style={CreateStyles.popUp}>
                            <LottieView
                                source={require('../media/animation/loading')}
                                autoPlay
                                loop
                                style={CreateStyles.popUpAnimation}/>
                            <Text style={CreateStyles.popUpTxt}>Creating lesson plan...</Text>
                        </View>
                    </Modal>
                </View>
            );
        }
    }
