import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, Text, TextInput, TouchableOpacity, Linking} from 'react-native';
import axios from 'axios';
import PostStyles from '../styles/PostStyles';
import CompetencyTag from '../comps/CompetencyTag';
import firebase from 'react-native-firebase';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';

export default function Post({id, username, ava, uid, img, subject, grade, topic, desc, inst, remarks, created_time, objs, coms}) {

    const host = 'https://teachsharek12ss.herokuapp.com/post';

    let [userProfile, setUserProfile] = useState();
    let [links, setLinks] = useState([]);
    let [files, setFiles] = useState([]);
    let [cUid, setCUid] = useState('');
    let [app, setApp] = useState(false);
    let [appStyles, setAppStyles] = useState([]);
    let [appTxt, setAppTxt] = useState('');
    let [savedLps, setSavedLps] = useState([]);
    let [save, setSave] = useState(false);
    let [saveStyles, setSaveStyles] = useState([]);
    let [saveTxt, setSaveTxt] = useState('');
    let [cmt, setCmt] = useState([]);
    let [tempCmt, setTempCmt] = useState("");

    let getData = async () => {
        let tempUid = await AsyncStorage.getItem('uid');
        let tempUserProfile= await AsyncStorage.getItem('userData');
        setCUid(tempUid);
        console.log("bzhczdlcsdasd", tempUserProfile);
        if (tempUserProfile !== null) {
            setUserProfile(JSON.parse(tempUserProfile));
        }
        return tempUid;
    };

    let readLinks = async () => {
        let data = await axios.post(host, {
            key: 'links_read',
            data: {pid: id},
        }).catch(e => console.log(e.message));
        setLinks(JSON.parse(data.data.body).data);
        console.log('hhihihihihihi', links);
    };
    let readFiles = async () => {
        let data = await axios.post(host, {
            key: 'files_read',
            data: {pid: id},
        }).catch(e => console.log(e.message));
        setFiles(JSON.parse(data.data.body).data);
    };

    let readAppreciations = async (r) => {
        let data = await axios.post(host, {
            key: 'appreciates_read',
            data: {pid: id, uid: r},
        }).catch(e => console.log(e.message));
        JSON.parse(data.data.body).data.length !== 0 ? setApp(true) : setApp(false);
        await appreciationStyles();
    };


    let readSaved = async (r) => {
        let saved = [];
        let c = 0;
        let ref = firestore().collection('UserProfiles').doc(r);
        firebase
            .firestore()
            .runTransaction(async transaction => {
                    const currentUser = await transaction.get(ref);
                    saved = currentUser.data().saved;
                },
            );
        console.log("hahahahahahaha", saved);
        await saved.map((o) => {
            o === id && c++;
        });
        c > 0 ? setSave(true) : setSave(false);
        savedStyles();
    };

    let readViews = async () => {
        let data = await axios.post(host, {
            key: 'views_read',
            data: {pid: id},
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;

    };

    let readCmts = async () => {
        let data = await axios.post(host, {
            key: 'cmts_read',
            data: {pid: id},
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };


    // let obj = {
    //     key: 'lesson_plans_read',
    //     data: {},
    // };
    //
    // let data = await axios.post(host, obj)
    //     .catch(function (error) {
    // })
    // setLessonPlans(JSON.parse(data.data.body).data);

    let appreciationData = async () => {
        if (app === false) {
            await axios.post(host, {
                key: 'appreciates_create',
                data: {pid: id, uid: cUid},
            }).catch(e => console.log(e.message));
        } else {
            await axios.post(host, {
                key: 'appreciates_delete',
                data: {pid: id, uid: cUid},
            }).catch(e => console.log(e.message));
        }
    };

    let appreciationStyles = () => {
        if (app === true) {
            setAppTxt('Appreciated');
            setAppStyles([PostStyles.selectedAppBtn, PostStyles.selectedAppTxt]);
        } else {
            setAppTxt('Appreciate');
            setAppStyles([PostStyles.unselectedAppBtn, PostStyles.unselectedAppTxt]);
        }
    };

    let savedData = async () => {
        let ref = firestore().collection('UserProfiles').doc(cUid);
        if (save === false){
            ref.update({
                saved: firebase.firestore.FieldValue.arrayUnion(id)
            })
        } else {
            ref.update({
                saved: firebase.firestore.FieldValue.arrayRemove(id)
        })
        }
    };

    let savedStyles = () => {
        if (save === true) {
            setSaveTxt('Saved');
            setSaveStyles([PostStyles.selectedSaveBtn, PostStyles.selectedSaveTxt]);
        } else {
            setSaveTxt('Save');
            setSaveStyles([PostStyles.unselectedSaveBtn, PostStyles.unselectedSaveTxt]);
        }
    };

    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    };

    let Comments = ({c}) => {
        return (
            <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                <Image
                    style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}
                    source={{uri: userProfile.photo}}
                />
                <View style={{backgroundColor: "#f7f7f7", width: "100%", padding: 10, borderRadius: 10}}>
                    <Text style={{fontWeight: "bold", marginBottom: 5}}>{capitalize(userProfile.fname)} {capitalize((userProfile.lname))}</Text>
                    <Text>{c}</Text>
                </View>
            </View>
        )
    };

    useEffect(() => {
        getData().then(r => {
            readAppreciations(r);
            readSaved(r);
        });
        readLinks();
        readFiles();

    }, []);


    useEffect(() => {
        appreciationStyles();
    }, [app]);

    console.log("uhiusdgfuids", tempCmt, cmt, userProfile);

    return (
        <ScrollView
            style={PostStyles.wrapper}
        >
            {/*<View*/}
            {/*    style={PostStyles.topBarWrapper}*/}
            {/*>*/}
            {/*    <TouchableOpacity>*/}
            {/*        <View>*/}
            {/*            <Text>Back</Text>*/}
            {/*        </View>*/}
            {/*    </TouchableOpacity>*/}
            {/*</View>*/}
            <View
                style={PostStyles.profileWrapper}
            >
                <TouchableOpacity
                    style={PostStyles.avaWrapper}
                    onPress={()=>Actions.profile({u: uid})}
                >
                    <Image
                        style={PostStyles.avaImg}
                        source={{uri: ava}}
                    />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        onPress={()=>Actions.profile({u: uid})}
                    >
                        <Text>{username}</Text>
                    </TouchableOpacity>
                    <Text
                        style={PostStyles.dateTxt}
                    >{created_time}</Text>
                </View>
            </View>
            <Image
                style={PostStyles.img}
                source={{uri: img}}
            />
            <Text
                style={PostStyles.topicTxt}
            >{topic}</Text>
            <Text
                style={PostStyles.subjectGradeTxt}
            >{subject} {grade}</Text>
            <View
                style={PostStyles.competenciesWrapper}
            >
                {
                    coms.map((o) => {
                        return (
                            <CompetencyTag
                                c={o.core}
                                s={o.sub}
                                p={o.profile}
                            />
                        );

                    })
                }
            </View>
            <View style={PostStyles.contentWrapper}>
                <Text style={PostStyles.title}>Resources</Text>
                {
                    links.map((o) => {
                        return (
                            <Text
                                style={PostStyles.links}
                                onPress={() => Linking.openURL('http://' + o.link)}>
                                {o.link}
                            </Text>
                        );
                    })
                }
                {
                    files.map((o) => {
                        return (
                            <Text
                                style={PostStyles.links}
                                onPress={() => Linking.openURL(o.file_link)}
                            >
                                {o.name}
                            </Text>
                        );
                    })
                }
            </View>
            <View style={PostStyles.contentWrapper}>
                <Text
                    style={PostStyles.title}
                >Description</Text>
                <Text>{desc}</Text>
            </View>
            {
                inst && <View style={PostStyles.contentWrapper}>
                    <Text style={PostStyles.title}>Instruction</Text>
                    <Text>{inst}</Text>
                </View>
            }
            {
                remarks && <View style={[PostStyles.contentWrapper, {marginBottom: 20}]}>
                    <Text style={PostStyles.title}>Remarks</Text>
                    <Text>{remarks}</Text>
                </View>
            }
            <View style={PostStyles.btnWrapper}>
                <TouchableOpacity
                    onPress={() => {
                        setApp(!app);
                        appreciationData();
                        appreciationStyles();
                    }
                    }
                >
                    <View style={[PostStyles.btn, appStyles[0]]}>
                        <Text style={appStyles[1]}>{appTxt}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setSave(!save);
                        savedData();
                        savedStyles();
                    }
                    }
                >
                    <View style={[PostStyles.btn, saveStyles[0]]}>
                        <Text style={saveStyles[1]}>{saveTxt}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={[PostStyles.btn, PostStyles.shareBtn]}>
                        <Text style={PostStyles.shareTxt}>Share</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={PostStyles.cmtInpWrapper}>
            <TextInput
                style={PostStyles.cmtInp}
                multiline={true}
                placeholder={"Write your comment"}
                onChangeText={(t)=>setTempCmt(t)}
                value={tempCmt}
            />
            <TouchableOpacity
                style={PostStyles.cmtBtnWrapper}
                onPress={()=>{
                    setCmt(cmt.concat(tempCmt))
                }}
            >
                <View style={PostStyles.cmtBtn}>
                    <Text style={PostStyles.cmtTxt}>Send</Text>
                </View>
            </TouchableOpacity>
            </View>
            <View style={{marginBottom: 60, flex: 1}}>
                {
                    cmt.map((o)=>{
                        return(
                            <Comments
                                c={o}
                            />
                        )
                    })
                }
            </View>


        </ScrollView>
    );
}
