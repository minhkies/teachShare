import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileHeading from '../comps/ProfileHeading';
import ProfileStyles from '../styles/ProfileStyles';
import BlueBtn from '../comps/BlueBtn';
import PostTabs from '../comps/PostTabs';
import axios from 'axios';
import PostCard from '../comps/PostCard';

export default function Profile() {
    let tempUserProfile, uid;
    let [userInfo, setUserInfo] = useState({});
    let [lessonPlans, setLessonPlans] = useState([]);

    // const host = 'https://htin.postgres.database.azure.com:3001/post';
    const host = 'http://142.232.162.210:3001/post';
    // const host = 'http://192.168.1.90:3001/post';

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
            tempUserProfile = await AsyncStorage.getItem('userData');
            tempUid = await AsyncStorage.getItem('uid');

            if (tempUserProfile !== null && tempUid !== null) {
                setUserInfo(JSON.parse(tempUserProfile));
                uid = tempUid;
            }
        } catch (e) {
            console.log(e.message)
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
        getData().then(()=>{
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
            {
                lessonPlans.map((o,i)=>{
                    if (o.is_public === true){
                        return(
                            <PostCard
                                id={o.id}
                                uid={o.uid}
                                img={o.img}
                                subject={o.subject}
                                grade={o.grade}
                                topic={o.topic}
                                desc={o.description}
                                inst={o.instruction}
                                remarks={o.remarks}
                                created_time={o.created_time}
                                objs={o.learning_objs}
                            />
                        )
                    }
                })
            }
        </ScrollView>
    );

}
