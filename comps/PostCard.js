import React, {useState, useEffect} from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import PostCardStyles from '../compstyles/PostCardStyles';
import firestore from '@react-native-firebase/firestore';
import firebase from "react-native-firebase";
import AsyncStorage from '@react-native-community/async-storage';

export default function PostCard({id, uid, img, subject, grade, topic, desc, inst,remarks,created_time, objs, coms, apps, downs, views, cmts}){
    let [name, setName] = useState();
    let [ava, setAva] = useState();
    let [timeTxt, setTimeTxt] = useState("");

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    function timing(){
        let cY = parseInt(created_time.slice(0,4));
        let cM = parseInt(created_time.slice(5,7))-1;
        let cD = parseInt(created_time.slice(8,10));
        let cH = parseInt(created_time.slice(11,13));
        let cMi = parseInt(created_time.slice(14,16));
        let cS = parseInt(created_time.slice(17,19));
        let cuY = new Date().getFullYear();
        let cuM = new Date().getMonth();
        let cuD = new Date().getDate();
        let cuH = new Date().getHours();
        let cuMi = new Date().getMinutes();
        let cuS = new Date().getSeconds();

        if (cY === cuY){
            if (cM === cuM){
                if (cD === cuD){
                    if (cH===cuH){
                        if (cMi === cuMi){
                            setTimeTxt(cuS - cS + " seconds ago")
                        } else {
                            if (cuMi-cMi > 1){
                                setTimeTxt(cuMi-cMi + " minutes ago")
                            } else {
                                setTimeTxt("a minute ago")
                            }
                        }
                    } else{
                        if(cuH-cH>1){
                            setTimeTxt(cuH-cH+" hours ago")
                        } else {
                            setTimeTxt("an hour ago")
                        }
                    }
                } else {
                    if (cuD-cD>1){
                        setTimeTxt(cuD-cD + " days ago")
                    } else {
                        setTimeTxt("a day ago")
                    }
                }
            } else {
                if(cuM-cM>1){
                    setTimeTxt(cuM-cM+" months ago")
                } else {
                    setTimeTxt("a month ago")
                }
            }
        } else {
            if(cuY-cY>1){
                setTimeTxt(cuY-cY+" years ago")
            } else {
                setTimeTxt("a year ago")
            }
        }


    }

    function getUserProfile(){
        let ref = firestore().collection('UserProfiles').doc(uid);
        firebase
            .firestore()
            .runTransaction(async transaction => {
                    const user = await transaction.get(ref);
                    setName(capitalize(user.data().fname) + " " + capitalize(user.data().lname));
                    setAva(user.data().photo);
                }
            ).then();
    }

    let Competencies = ({o}) => {
      return(
          <View style={PostCardStyles.comsCommCore}>
              <Text>{o.core}</Text>
              <View style={PostCardStyles.comsCommSub}>
                  <Text>{o.sub}</Text>
                  <View style={PostCardStyles.comsCommProfile}>
                      <Text>{o.profile}</Text>
                  </View>
              </View>
          </View>
      )
    };

    useEffect(()=>{
        getUserProfile();
        timing();
    },[]);

    return(
        <TouchableOpacity style={PostCardStyles.wrapper}>
            <View style={PostCardStyles.topWrapper}>
                <TouchableOpacity style={PostCardStyles.profileWrapper}>
                    <Image
                        style={PostCardStyles.avatar}
                        source={{uri: ava}}
                    />
                    <Text>{name}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image/>
                </TouchableOpacity>
            </View>
            <Image
                style={PostCardStyles.coverImg}
                source={{uri: img}}
            />
            <Text style={PostCardStyles.topicTxt}>{topic}</Text>
            <Text style={PostCardStyles.subjectTxt}>{subject} {grade}</Text>
            <Text>{desc}</Text>
            <View
                style={PostCardStyles.comsWrapper}
            >
                {
                    coms.map((o)=>{
                        return(
                            <Competencies
                                o={o}
                            />
                        )
                    })
                }
            </View>
            <View style={PostCardStyles.statisticTag}>
                <View style={PostCardStyles.leftWrapper}>
                    <View style={PostCardStyles.statWrapper}>
                        <Image
                            style={PostCardStyles.statIcon}
                            source={require('../media/icon/appreciate-stat.png')}
                        />
                        <Text style={PostCardStyles.statTxt}>{apps.length}</Text>
                    </View>
                    <View style={PostCardStyles.statWrapper}>
                        <Image
                            style={PostCardStyles.statIcon}
                            source={require('../media/icon/view-stat.png')}
                        />
                        <Text style={PostCardStyles.statTxt}>{views.length}</Text>
                    </View>
                    <View style={PostCardStyles.statWrapper}>
                        <Image
                            style={PostCardStyles.statIcon}
                            source={require('../media/icon/download-stat.png')}
                        />
                        <Text style={PostCardStyles.statTxt}>{downs.length}</Text>
                    </View>
                    <View style={PostCardStyles.statWrapper}>
                        <Image
                            style={PostCardStyles.statIcon}
                            source={require('../media/icon/cmt-stat.png')}
                        />
                        <Text style={PostCardStyles.statTxt}>{cmts.length}</Text>
                    </View>
                </View>
                <Text style={PostCardStyles.timeTxt}>{timeTxt}</Text>
            </View>
        </TouchableOpacity>
    )
}
