import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Image, Modal} from 'react-native';
// import ShadowView from 'react-native-simple-shadow-view/src/ShadowView';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import {Actions} from 'react-native-router-flux';
import RegisterStyles from '../styles/RegisterStyles';
import UserData from '../data/UserData';
import ImgOptions from '../comps/ImgOptions';

export default function Register() {
    const ref = firestore().collection('UserProfiles');
    let [pass, setPass] = useState(true);
    let [firstName, setFirstName] = useState();
    let [lastName, setLastName] = useState();
    let [school, setSchool] = useState();
    let [subjects, setSubjects] = useState([]);
    let [email, setEmail] = useState();
    let [password, setPassword] = useState();
    let [errorMsg, setErrorMsg] = useState();
    let passIcon = null;
    let [tempSub, setTempSub]=useState("");
    let [tempGrade, setTempGrade]=useState("");
    let [uri, setUri] = useState("");
    let [photo, setPhoto] = useState("");
    let sub=subjects;
    let alertMsg="Please enter a valid subject & grade level";

    if (pass === true) {
        passIcon = require('../media/icon/eye-closed.png');
    } else {
        passIcon = require('../media/icon/eye.png');
    }

    let checkInp = () => {
        if ((tempSub) && (tempGrade) && tempSub !== "" && tempGrade !== ""){
            tempSub = tempSub.trim();
            tempGrade = tempGrade.trim();
            if (isNaN(tempGrade) === false) {
                sub.push([tempSub, tempGrade]);
                setSubjects(sub);
                setTempSub("");
                setTempGrade("");
            } else {
                alert(alertMsg)
            }
        } else {
            alert(alertMsg)
        }

    };

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
        return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    let HandleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => submitImg())
            .catch(error => setErrorMsg(error.message));
    };

    let submitImg = (uid) => {
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
            photo: photo
        })
            .then(addSubjects(currentUser))
            .catch(error => setErrorMsg(error.message));
    };

    async function addSubjects(currentUser){
        await subjects.map((obj)=>{
            addSub(currentUser, obj);
        })
            .then(Actions.loading())
            .catch(error => setErrorMsg(error.message));
    }

    async function addSub(currentUser, obj){
        await ref.doc(currentUser && currentUser.uid).collection('teaching_subjects').doc().set({
            subject: obj[0],
            grade: obj[1]
        }).catch(error => setErrorMsg(error.message));
    }

    useEffect(()=>{
        addUserProfile();
    },[photo]);

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
                    <View style={RegisterStyles.subjectAddWrapper}>
                        <TextInput
                            style={[RegisterStyles.inp, RegisterStyles.addInp]}
                            placeholder={'Math'}
                            autoCapitalize="words"
                            value={tempSub}
                            onChangeText={(txt)=>setTempSub(txt)}
                        />
                        <TextInput
                            style={[RegisterStyles.inp, RegisterStyles.addGradeInp]}
                            placeholder={'12'}
                            autoCapitalize="words"
                            value={tempGrade}
                            onChangeText={(txt)=>setTempGrade(txt)}
                        />
                        <TouchableOpacity
                            style={RegisterStyles.addBtnWrapper}
                            onPress={()=>{
                                checkInp();
                            }}
                        >
                            <Text style={RegisterStyles.addBtnTxt}>Add</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={RegisterStyles.subjectsList}>
                    {
                        subjects.map((obj, ind) => {
                            return (
                                <Text style={RegisterStyles.subjectTxt}>{capitalize(obj[0])} {obj[1]}</Text>
                            )
                        })
                    }
                    </View>
                </View>
                <ImgOptions
                title={"profile image"}
                type={"register"}
                setUri={setUri}
                />
            </View>
            <Text style={RegisterStyles.msg}>{errorMsg}</Text>
            <View style={RegisterStyles.btnWrapper}>
                <TouchableOpacity
                    style={RegisterStyles.registerBtn}
                    onPress={() => {
                        HandleSignUp()
                        ;
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
        </ScrollView>
    );
}
