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
    let userProfile, teachingSubjects;
    let [currentUser, setCurrentUser] = useState('');
    let [lessonPlans, setLessonPlans] = useState([]);
    let [subjects, setSubjects] = useState([]);
    let [selectedSubjects, setSelectedSubjects] = useState([]);

    // const host = 'https://htin.postgres.database.azure.com:3001/post';
    // const host = 'http://142.232.162.210:3001/post';
    // const host = 'http://192.168.1.90:3001/post';
    const host = "https://teachsharek12ss.herokuapp.com/post";

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    let getData = async () => {
        let count = 0;
        try {
            userProfile = await AsyncStorage.getItem('userData');
            teachingSubjects = await AsyncStorage.getItem('teachingSubjects');
            if (userProfile !== null && teachingSubjects !==null) {
                 userProfile = JSON.parse(userProfile);
                teachingSubjects = JSON.parse(teachingSubjects);
                setSubjects(teachingSubjects);
                 subjects.map((o,i)=>{
                    setSelectedSubjects(selectedSubjects.concat([true]));
                    count++;
                    console.log("hihihi", selectedSubjects, count);
                });
                setCurrentUser(capitalize(userProfile.fname));
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

            let data = await axios.post(host, obj)
                .catch(function (error) {
            });
            setLessonPlans(JSON.parse(data.data.body).data)
        };


    useEffect(()=>{
        getData();
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
            <SubjectsFilter
                subjects= {subjects}
                selectedSubjects = {selectedSubjects}
                setSelectedSubjects= {setSelectedSubjects}
            />
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
