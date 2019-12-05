import React, {useEffect, useState} from 'react';
import {View, ScrollView, Image, Text, TextInput, TouchableOpacity, Linking} from 'react-native';
import axios from 'axios';
import PostStyles from '../styles/PostStyles';
import CompetencyTag from '../comps/CompetencyTag';

export default function Post({id, username, ava, uid, img, subject, grade, topic, desc, inst, remarks, created_time, objs, coms}) {
    const host = 'https://teachsharek12ss.herokuapp.com/post';
    let [links, setLinks] = useState([]);
    let [files, setFiles] = useState([]);


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

    let readAppreciations = async () => {
        let data = await axios.post(host, {
            key: 'appreciates_read',
            data: {pid: id},
        }).catch(e => console.log(e.message));
        return JSON.parse(data.data.body).data;
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
    // });
    // setLessonPlans(JSON.parse(data.data.body).data);

    useEffect(() => {
        readLinks();
        readFiles();
    }, []);


    return (
        <ScrollView
            style={PostStyles.wrapper}
        >
            <View
                style={PostStyles.topBarWrapper}
            >
                <TouchableOpacity>
                    <View>
                        <Text>Back</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View
                style={PostStyles.profileWrapper}
            >
                <TouchableOpacity
                    style={PostStyles.avaWrapper}
                >
                    <Image
                        style={PostStyles.avaImg}
                        source={{uri: ava}}
                    />
                </TouchableOpacity>
                <View>
                    <TouchableOpacity>
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
                remarks && <View style={PostStyles.contentWrapper}>
                    <Text style={PostStyles.title}>Remarks</Text>
                    <Text>{remarks}</Text>
                </View>
            }


        </ScrollView>
    );
}
