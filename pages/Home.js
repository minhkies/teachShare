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
    let temp = [];
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
                teachingSubjects.map(() => {
                    tempSub.push(true);
                });
                readLessonPlans(teachingSubjects, tempSub).then(async(r)=>{
                    const ls = await readDependencies(r);
                    setLessonPlans(ls);
                    }
                );
                setSelectedSubjects(tempSub);
                setCurrentUser(capitalize(userProfile.fname));
            }
        } catch (e) {
            // error reading value
        }
    };

    let compare = (a, b) => {
        const idA = a.id;
        const idB = b.id;
        let comparison = 0;
        if (idA > idB) {
            comparison = 1;
        } else {
            comparison = -1;
        }
        return comparison;
    };

    let readLessonPlans = async (t, s) =>{
            return await Promise.all(t.map(async (o, i) => {
                if (s[i] === true) {
                    let d = await axios.post(host, {
                        key: "lesson_plans_read_w_stats",
                        data: {subject: o.subject, grade: o.grade}
                    });
                    console.log("hhhhhhh", d);
                    return JSON.parse(d.data.body).data;
                }
            }));
        };

    let readDependencies = async (r) =>{
        let ls=r.flat().filter(Boolean).sort(compare).reverse();
        for (let x=0; x<ls.length;x++){
            ls[x]["competencies"] = await readCompetencies(ls[x]);
            ls[x]["links"] = await readLinks(ls[x]);
            ls[x]["files"] = await readFiles(ls[x]);
            ls[x]["appreciations"] = await readAppreciations(ls[x]);
            ls[x]["views"] = await readViews(ls[x]);
            ls[x]["downloads"] = await readDownloads(ls[x]);
            ls[x]["cmts"] = await readCmts(ls[x]);
        }
        return ls;
    };

    let readCompetencies = async (o) => {
        let data = await axios.post(host, {
            key: 'competencies_read',
            data: {pid: o.id}
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };

    let readLinks = async (o) => {
        let data = await axios.post(host, {
            key: 'links_read',
            data: {pid: o.id}
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };
    let readFiles = async (o) => {
        let data = await axios.post(host, {
            key: 'files_read',
            data: {pid: o.id}
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };

    let readAppreciations = async (o) => {
        let data = await axios.post(host, {
            key: 'appreciates_read',
            data: {pid: o.id}
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };
    let readViews = async (o) => {
        let data = await axios.post(host, {
            key: 'views_read',
            data: {pid: o.id}
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };
    let readDownloads = async (o) => {
        let data = await axios.post(host, {
            key: 'downloads_read',
            data: {pid: o.id}
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
    };
    let readCmts = async (o) => {
        let data = await axios.post(host, {
            key: 'cmts_read',
            data: {pid: o.id}
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
        readLessonPlans(subjects, selectedSubjects).then(async(r)=>{
                const ls = await readDependencies(r);
                setLessonPlans(ls);
            }
        );
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
                                coms={o.competencies}
                                apps={o.appreciations}
                                downs={o.downloads}
                                views={o.views}
                                cmts={o.cmts}
                            />
                        );
                    }
                })
            }
        </ScrollView>
    );
}
