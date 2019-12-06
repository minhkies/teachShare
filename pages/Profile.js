import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileHeading from '../comps/ProfileHeading';
import ProfileStyles from '../styles/ProfileStyles';
import BlueBtn from '../comps/BlueBtn';
import PostTabs from '../comps/PostTabs';
import axios from 'axios';
import PostCard from '../comps/PostCard';
import firestore from '@react-native-firebase/firestore';
import firebase from "react-native-firebase";
import {Actions} from 'react-native-router-flux';

export default function Profile({u}) {
    let tempUserProfile, uid;
    let [userInfo, setUserInfo] = useState({});
    let [lessonPlans, setLessonPlans] = useState([]);

    // const host = 'https://htin.postgres.database.azure.com:3001/post';
    // const host = 'http://142.232.162.210:3001/post';
    // const host = 'http://192.168.1.90:3001/post';
    const host = "https://teachsharek12ss.herokuapp.com/post";

    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    };

    let init = async () => {
        if (!u){
                let tempUid;
                try {
                    tempUserProfile = await AsyncStorage.getItem('userData');
                    tempUid = await AsyncStorage.getItem('uid');

                    if (tempUserProfile !== null && tempUid !== null) {
                        setUserInfo(JSON.parse(tempUserProfile));
                        uid = tempUid;
                    }
                } catch (e) {
                    console.log(e.message)
                }
        } else {
            uid = u;
            let ref = firestore().collection('UserProfiles').doc(u);
            firebase
                .firestore()
                .runTransaction(async transaction => {
                        const currentUser = await transaction.get(ref);
                        try {
                            setUserInfo(currentUser.data())
                        } catch (e) {
                            // saving error
                        }
                    }
                );
        }
    };



    let readLessonPlans = async () => {
        //fetch to the bd to read
        let obj = {
            key: 'lesson_plans_read',
            data: {
                uid: uid
            },
        };

        let data = await axios.post(host, obj)
            .catch(function (error) {
            });
        setLessonPlans(JSON.parse(data.data.body).data);
        console.log("read", data)
    };


    useEffect(() => {
        init().then(()=>{
            readLessonPlans();
        });

    }, []);

    return (
        <ScrollView
            style={ProfileStyles.wrapper}
            stickyHeaderIndices={[3]}>
            <ProfileHeading
                url={{uri: userInfo.photo}}
                name={capitalize(userInfo.fname) + ' ' + capitalize(userInfo.lname)}
                school={userInfo.school}
            />
            <Text style={ProfileStyles.bioTxt}>{userInfo.bio}</Text>
            <View style={ProfileStyles.btnWrapper}>
                <BlueBtn
                    txt={'Follow'}
                />
                <BlueBtn
                    txt={'Message'}
                />
            </View>
            <PostTabs/>
            {/*{*/}
            {/*    lessonPlans.map((o,i)=>{*/}
            {/*        if (o.is_public === true){*/}
            {/*            return(*/}
            {/*                <PostCard*/}
            {/*                    id={o.id}*/}
            {/*                    uid={o.uid}*/}
            {/*                    img={o.img}*/}
            {/*                    subject={o.subject}*/}
            {/*                    grade={o.grade}*/}
            {/*                    topic={o.topic}*/}
            {/*                    desc={o.description}*/}
            {/*                    inst={o.instruction}*/}
            {/*                    remarks={o.remarks}*/}
            {/*                    created_time={o.created_time.toLocaleString('en-US', {timeZone: 'Canada/Pacific'})}*/}
            {/*                    objs={o.learning_objs}*/}
            {/*                    coms={o.competencies}*/}
            {/*                    apps={o.c_apps}*/}
            {/*                    downs={o.c_downs}*/}
            {/*                    views={o.c_views}*/}
            {/*                    cmts={o.c_cmts}*/}
            {/*                />*/}
            {/*            )*/}
            {/*        }*/}
            {/*    })*/}
            {/*}*/}
        </ScrollView>
    );

}
