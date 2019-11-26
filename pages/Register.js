import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Image, ToastAndroid} from 'react-native';
// import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Actions} from 'react-native-router-flux';
import RegisterStyles from '../styles/RegisterStyles';
import UserData from '../data/UserData';
import ImgOptions from '../comps/ImgOptions';
import DropBox from '../comps/DropBox';
import curriculum from '../data/CurriculumData';
import LoadingStyles from '../styles/LoadingStyles';
import CreateStyles from '../styles/CreateStyles';
import LottieView from "lottie-react-native";
import Modal from 'react-native-modal';
import {asyncStorage} from 'reactotron-react-native';

export default function Register() {
    const ref = firestore().collection('UserProfiles');
    let [loading, setLoading] = useState(false);
    let [pass, setPass] = useState(true);
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [school, setSchool] = useState();
    let [subjects, setSubjects] = useState([]);
    let [email, setEmail] = useState();
    let [bio, setBio] = useState();
    let [password, setPassword] = useState();
    let passIcon = null;
    let [uri, setUri] = useState("");
    let [photo, setPhoto] = useState("");
    let [curriculum, setCurriculum] = useState([]);
    let [selectedCurriculum, setSelectedCurriculum] = useState("");
    let [selectedGrade, setSelectedGrade] = useState("");
    let [selectedSubject, setSelectedSubject] = useState("");
    let [listSubjects, setListSubjects] = useState([]);


    if (pass === true) {
        passIcon = require('../media/icon/eye-closed.png');
    } else {
        passIcon = require('../media/icon/eye.png');
    }

    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    };

    let handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => submitImg())
            .catch((error) => {
                setLoading(false);
                ToastAndroid.show(error.message, ToastAndroid.LONG, ToastAndroid.BOTTOM)}
            );
    };

    let submitImg = () => {
        // const ref2 = firebase.storage().ref("profilePhoto");
        const {currentUser} = firebase.auth();
        const file = uri;
        const name = currentUser && currentUser.uid;
        const ref2 = firebase.storage().ref().child("profilePhotos");
        const metadata = { contentType: file.type };
        const task = ref2.child(name).put(file, metadata);

        task
            .then(snapshot =>
                setPhoto(snapshot.downloadURL)
            )
            // .then(() => addUserProfile())

    };

    let addUserProfile = async () => {

        const {currentUser} = firebase.auth();
        await ref.doc(currentUser && currentUser.uid).set({
            fname: firstName.toLowerCase(),
            lname: lastName.toLowerCase(),
            school: school,
            bio: bio,
            photo: photo
        })
            .then(addSubjects(currentUser))
            .catch((error) => {
                setLoading(false);
                ToastAndroid.show(error.message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
            });
    };

    async function addSubjects(currentUser){
        await listSubjects.map((obj)=>{
            addSub(currentUser, obj);
        })
            .then(()=>{
                setLoading(false);
                Actions.loading();

            })
            .catch((error) => {
                setLoading(false);
                ToastAndroid.show(error.message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
            });
    }

    async function addSub(currentUser, obj){
        await ref.doc(currentUser && currentUser.uid).collection('teachingSubjects').doc().set({
            subject: obj[0],
            grade: obj[1]
        }).catch((error) => {
            setLoading(false);
            ToastAndroid.show(error.message, ToastAndroid.LONG, ToastAndroid.BOTTOM);
        });
    }

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

    function listAllSubjects(){
        if (selectedCurriculum !== "" && selectedGrade !== "" && selectedGrade !== ""){
            if (listSubjects.length === 0){
                setListSubjects(listSubjects.concat([[selectedSubject, selectedGrade]]))
            } else {
                let count = 0;
                listSubjects.map((obj) => {
                    if (obj[0] === selectedSubject && obj[1] === selectedGrade){
                        count++
                    }
                });
                if (count > 0){
                    alert("The selected subject is already added");
                } else {
                    setListSubjects(listSubjects.concat([[selectedSubject, selectedGrade]]))
                }
            }
        } else {
            alert("Please select a valid subject and grade level")
        }
    }

    let inputValidation = async () => {
        let msg="";
        if (firstName === "" || firstName === null){
            msg="please enter a valid first name"
        } else if (lastName === "" || lastName === null){
            msg="please enter a valid last name"
        } else if (school === "" || school === null){
            msg="please enter a valid school name"
        } else if (listSubjects === [] || listSubjects === [null]){
            msg="please select at least one teach subject"
        } else if (uri=== "" || uri === null){
            msg="please select a profile photo"
        }

        if (msg !== ""){
            ToastAndroid.show(capitalize(msg), ToastAndroid.LONG, ToastAndroid.BOTTOM)
        } else {
            setLoading(true);
            handleSignUp();
        }
    };

    useEffect(()=>{
        addUserProfile();
    },[photo]);

    useEffect(()=>{
        getCurriculum();
    }, []);

    useEffect(()=>{
        if (selectedGrade!=="" && selectedCurriculum !== ""){
            getSubjects();
        }
    }, [selectedGrade]);

    useEffect(()=>{
        if (selectedGrade!=="" && selectedCurriculum !== ""){
            getSubjects();
        }
    }, [selectedCurriculum]);

        return (
            <ScrollView style={RegisterStyles.wrapper}
                        showsVerticalScrollIndicator={false}>
                <View style={RegisterStyles.pgTitleWrapper}>
                    <Text style={RegisterStyles.pgTitle}>Register</Text>
                    <Text>Sign up for a teachShare account</Text>
                </View>
                <View>
                    <View style={RegisterStyles.inpWrapper}>
                        <Text style={RegisterStyles.inpHeading}>First Name</Text>
                        <TextInput
                            style={RegisterStyles.inp}
                            placeholder={'John'}
                            autoCapitalize="words"
                            onChangeText={(txt) => {
                                setFirstName(txt);
                            }}
                        />
                    </View>
                    <View style={RegisterStyles.inpWrapper}>
                        <Text style={RegisterStyles.inpHeading}>Last Name</Text>
                        <TextInput
                            style={RegisterStyles.inp}
                            placeholder={'McDonald'}
                            autoCapitalize="words"
                            onChangeText={(txt) => {
                                setLastName(txt);
                            }}
                        />
                    </View>
                    <View style={RegisterStyles.inpWrapper}>
                        <Text style={RegisterStyles.inpHeading}>Email</Text>
                        <TextInput
                            style={RegisterStyles.inp}
                            placeholder={'example@sd42.bc.ca'}
                            value={null}
                            onChangeText={(txt) => {
                                setEmail(txt.toLowerCase());
                            }}
                        />
                    </View>
                    <View style={RegisterStyles.inpWrapper}>
                        <Text style={RegisterStyles.inpHeading}>Password</Text>
                        <View style={RegisterStyles.passInpWrapper}>
                            <TextInput
                                style={[RegisterStyles.inp, RegisterStyles.passInp]}
                                secureTextEntry={pass}
                                autoCapitalize="none"
                                placeholder="**********"
                                onChangeText={(txt) => {
                                    setPassword(txt);
                                }}
                            />
                            <TouchableOpacity
                                style={RegisterStyles.passImgWrapper}
                                onPress={() => {
                                    setPass(!pass);
                                }}
                            >
                                <Image
                                    style={RegisterStyles.passImg}
                                    source={passIcon}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={RegisterStyles.inpWrapper}>
                        <Text style={RegisterStyles.inpHeading}>School</Text>
                        <TextInput
                            style={RegisterStyles.inp}
                            placeholder={'McMath Secondary School'}
                            autoCapitalize="words"
                            onChangeText={(txt) => {
                                setSchool(txt);
                            }}
                        />
                    </View>
                    <View style={RegisterStyles.inpWrapper}>
                        <Text style={RegisterStyles.inpHeading}>Teaching Subjects</Text>
                        <View>
                            <DropBox
                                title={"curriculum"}
                                data={curriculum}
                                select={setSelectedCurriculum}
                            />
                            <DropBox
                                title={"grade"}
                                data={["10", "11", "12"]}
                                select={setSelectedGrade}
                            />
                            <DropBox
                                title={"subject"}
                                data={subjects}
                                select={setSelectedSubject}/>
                            <TouchableOpacity
                                style={RegisterStyles.addBtnWrapper}
                                onPress={()=>{
                                    listAllSubjects();
                                }}
                            >
                                <Text style={RegisterStyles.addBtnTxt}>Add</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={RegisterStyles.subjectsList}>
                            {
                                listSubjects.map((obj, ind) => {
                                    return (
                                        <Text style={RegisterStyles.subjectTxt}>{obj[0]} {obj[1]}</Text>
                                    )
                                })
                            }
                        </View>
                    </View>
                    <ImgOptions
                        title={"profile image"}
                        type={"register"}
                        setUri={setUri}
                        uri={uri}
                    />
                </View>
                <View style={RegisterStyles.inpWrapper}>
                    <Text style={RegisterStyles.inpHeading}>Bio</Text>
                    <TextInput
                        style={[RegisterStyles.inp, RegisterStyles.multilineInp]}
                        multiline={true}
                        placeholder={'Tell us a bit about yous'}
                        onChangeText={(txt) => {
                            setBio(txt);
                        }}
                    />
                </View>
                <View style={RegisterStyles.btnWrapper}>
                    <TouchableOpacity
                        style={RegisterStyles.registerBtn}
                        onPress={() => {
                            inputValidation();
                        }}
                    >
                        <Text style={RegisterStyles.registerBtnTxt}>Register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={RegisterStyles.loginBtn}
                        onPress={() => {
                            Actions.login();
                        }}
                    >
                        <Text style={RegisterStyles.loginBtnTxt}>Already have an account? Login</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    isVisible={loading}
                    coverScreen={true}
                    animationIn={'slideInUp'}
                    animationOut={'slideInDown'}
                    animationInTiming={500}
                    animationOutTiming={500}
                    backdropOpacity={0.2}
                    style={RegisterStyles.popUpWrapper}
                >
                    <View style={CreateStyles.popUp}>
                        <LottieView
                            source={require('../media/animation/loading')}
                            autoPlay
                            loop
                            style={RegisterStyles.popUpAnimation}/>
                        <Text style={RegisterStyles.popUpTxt}>Creating lesson plan...</Text>
                    </View>
                </Modal>
            </ScrollView>

        );

}
