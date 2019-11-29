import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';
import AsyncStorage from '@react-native-community/async-storage';
import PostCard from '../comps/PostCard';
import axios from 'axios';

export default function Home() {
    let userProfile, teachingSubjects;
    let tempLessonPlans = [];
    let [currentUser, setCurrentUser] = useState('');
    let [lessonPlans, setLessonPlans] = useState([]);
    let [subjects, setSubjects] = useState([]);
    let [selectedSubjects, setSelectedSubjects] = useState([]);
    let [stat, setStat] = useState();

    // const host = 'https://htin.postgres.database.azure.com:3001/post';
    // const host = 'http://142.232.162.210:3001/post';
    // const host = 'http://192.168.1.90:3001/post';
    const host = 'https://teachsharek12ss.herokuapp.com/post';

    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    };

    let getData = async () => {
        let tempSub = [];
        try {
            userProfile = await AsyncStorage.getItem('userData');
            teachingSubjects = await AsyncStorage.getItem('teachingSubjects');
            if (userProfile !== null && teachingSubjects !== null) {
                userProfile = JSON.parse(userProfile);
                teachingSubjects = JSON.parse(teachingSubjects);
                setSubjects(teachingSubjects);
                teachingSubjects.map((o, i) => {
                    tempSub.push(true);
                });
                await readLessonPlans(teachingSubjects, tempSub);
                setSelectedSubjects(tempSub);
                setCurrentUser(capitalize(userProfile.fname));
            }
        } catch (e) {
            // error reading value
        }
    };

    let readLessonPlans = async (ts, sel) => {
        tempLessonPlans = [];
        lessonPlans = [];
        let c = 0;
        await ts.map(async (o, i) => {
            if (sel[i] === true) {
                c++;
                let readLessonPlan = async () => {
                    let data = await axios.post(host, {
                        key: 'lesson_plans_read',
                        data: {subject: o.subject, grade: o.grade},
                    })
                        .catch(function (error) {
                        });
                    let arr = JSON.parse(data.data.body).data;
                    for (let z = 0; z < arr.length; z++) {
                        let obj = arr[z];
                        let x = await readCompetencies(obj.id.toString());
                        obj['competencies'] = x;
                        tempLessonPlans.push(obj);
                    }
                    console.log('templp', tempLessonPlans);
                    return tempLessonPlans;
                };

                let tp = await readLessonPlan();
                setLessonPlans(tp.map((o) => {
                    return o;
                }));
            }
        });
    };


    let readCompetencies = async (id) => {

        let data = await axios.post(host, {
            key: 'competencies_read',
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
    // });
    // setLessonPlans(JSON.parse(data.data.body).data)

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        readLessonPlans(teachingSubjects, selectedSubjects);
    }, [selectedSubjects]);

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
                subjects={subjects}
                selectedSubjects={selectedSubjects}
                setSelectedSubjects={setSelectedSubjects}
            />
            {
                lessonPlans.map((o, i) => {
                    if (o.is_public === true) {
                        return (
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
                                created_time={o.created_time.toLocaleString('en-US', {timeZone: 'Canada/Pacific'})}
                                objs={o.learning_objs}
                            />
                        );
                    }
                })
            }
        </ScrollView>
    );
}
