import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';
import PostCard from '../comps/PostCard';
import axios from 'axios';

export default function Home() {
    let UserProfile, TeachingSubjects;
    let [currentUser, setCurrentUser] = useState('');
    let [lessonPlans, setLessonPlans] = useState([]);

    const host = 'htin.postgres.database.azure.com:3001/post';

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    let getData = async () => {
        try {
            UserProfile = await AsyncStorage.getItem('userData');
            if (UserProfile !== null) {
                UserProfile = JSON.parse(UserProfile);
                setCurrentUser(capitalize(UserProfile.fname));
            }
        } catch (e) {
            // error reading value
        }
    };

    let ReadLessonPlans = async () => {
            //fetch to the bd to read
            let obj = {
                key: 'lesson_plans_read',
                data: {},
            };

            let data = await axios.post(host, obj);
            console.log('read', JSON.parse(data.data.body).data[0]);
            setLessonPlans(JSON.parse(data.data.body).data)
        };

    useEffect(() => {
        getData();
    }, );

    useEffect(()=>{
        ReadLessonPlans();
    }, []);

    return (
        <ScrollView
            style={HomeStyles.wrapper}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <PageTitle
                title={'Welcome ' + currentUser}
                msg={'This homepage is tailored for you!'}
            />
            <SearchBar/>
            <SubjectsFilter/>
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
