import React, {useContext, useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, Image} from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';
import AsyncStorage from '@react-native-community/async-storage';
import PostCard from '../comps/PostCard';
import ContentLoader from "react-content-loader";
import axios from 'axios';
import SearchModal from '../comps/SearchModal';

export default function Home() {
    let userProfile, teachingSubjects;
    let [currentUser, setCurrentUser] = useState('');
    let [lessonPlans, setLessonPlans] = useState([]);
    let [subjects, setSubjects] = useState([]);
    let [selectedSubjects, setSelectedSubjects] = useState([]);
    let [c, setC] = useState(0);
    let [visible, setVisible] = useState(false);


    // const host = 'https://htin.postgres.database.azure.com:3001/post';
    // const host = 'http://192.168.1.84:3001/post';
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
                        data: {subject: o.subject.trim(), grade: o.grade, count: c}
                    });
                    return JSON.parse(d.data.body).data;
                }
            }));
        };

    let readDependencies = async (r) =>{
        let ls=r.flat().filter(Boolean).sort(compare).reverse();
        for (let x=0; x<ls.length;x++){
            ls[x]["competencies"] = await readCompetencies(ls[x]);
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

    useEffect(() => {
        getData();

    }, []);


    useEffect(() => {
        readLessonPlans(subjects, selectedSubjects).then(async(r)=>{
                const ls = await readDependencies(r);
                setLessonPlans(ls);
                console.log(ls);
            }
        );
    }, [selectedSubjects]);


    // const MyLoader = () => {
    //     return (
    //         <ContentLoader
    //             height={475}
    //             width={400}
    //             speed={2}
    //             primaryColor="#f3f3f3"
    //             secondaryColor="#ecebeb"
    //         >
    //             <circle cx="26" cy="26" r="26"/>
    //             <rect x="66" y="20" rx="2" ry="2" width="100" height="15"/>
    //             <rect x="0" y="62" rx="10" ry="10" width="400" height="135"/>
    //             <rect x="0" y="213" rx="5" ry="5" width="345" height="45"/>
    //             <rect x="0" y="264" rx="3" ry="3" width="181" height="29"/>
    //             <rect x="0" y="307" rx="2" ry="2" width="400" height="15"/>
    //             <rect x="0" y="328" rx="2" ry="2" width="400" height="15"/>
    //             <rect x="0" y="349" rx="2" ry="2" width="400" height="15"/>
    //             <rect x="0" y="381" rx="10" ry="10" width="400" height="20"/>
    //             <rect x="0" y="406" rx="10" ry="10" width="400" height="20"/>
    //         </ContentLoader>
    //     )
    // };


    const detectBot = ({layoutMeasurement, contentOffset, contentSize}) => {
        const paddingToBottom = 20;
        return layoutMeasurement.height + contentOffset.y >=
            contentSize.height - paddingToBottom;
    };

    return (
        <ScrollView
            style={HomeStyles.wrapper}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}
            onScroll={({nativeEvent}) => {
                if (detectBot(nativeEvent)) {
                    setC(c+=1);
                }
            }}
            scrollEventThrottle={400}
        >
            <PageTitle
                title={'Welcome ' + currentUser}
                msg={'This homepage is tailored for you!'}
            />
            <TouchableOpacity
                style={{width: "100%", height: 90}}
                onPress={()=>{
                    setVisible(!visible);
                    console.log("runninnnnnnnnggg");
                }}
            >
                {/*<SearchBar/>*/}
                <Image
                    style={{width:"100%", resizeMode: "contain", height: 90}}
                    source={require("../media/imgs/searchBar.jpg")}
                />
            </TouchableOpacity>

            <SubjectsFilter
                subjects={subjects}
                selectedSubjects={selectedSubjects}
                setSelectedSubjects={setSelectedSubjects}
                setC={setC}
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
                                apps={o.c_apps}
                                downs={o.c_downs}
                                views={o.c_views}
                                cmts={o.c_cmts}
                            />
                        );
                    }
                })
            }
            <SearchModal
                visible={visible}
                setVisible={setVisible}
            />
        </ScrollView>
    );
}
