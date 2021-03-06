import React, {useEffect} from 'react';
import {View, Image,Text, } from "react-native";
import LoadingStyles from "../styles/LoadingStyles";
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';


export default function Loading() {

    async function storeData() {
        const teachingSubjects = [];
        const {currentUser} = firebase.auth();
        let ref = firestore().collection('UserProfiles').doc(currentUser && currentUser.uid);
        await AsyncStorage.setItem('uid', currentUser && currentUser.uid);
        ref.collection('teachingSubjects').onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                const {subject, grade} = doc.data();
                teachingSubjects.push({
                    id: doc.id,
                    subject,
                    grade,
                });
            })
        });
        firebase
            .firestore()
            .runTransaction(async transaction => {
                    const currentUser = await transaction.get(ref);
                    try {
                        await AsyncStorage.setItem('userData', JSON.stringify(currentUser.data()));
                        await AsyncStorage.setItem('teachingSubjects', JSON.stringify(teachingSubjects)).then(Actions.main());
                    } catch (e) {
                        // saving error
                    }
                }
            );
    }


    let checking = () => (
        firebase.auth().onAuthStateChanged(user => {
             if (user){
                  storeData();

             } else {
                Actions.login()
             }
        })
    );

    useEffect(()=>{
        checking()
    });

    return(
        <View style={LoadingStyles.wrapper}>
            <Image
                style={LoadingStyles.top}
                source={require('../media/imgs/loadingbg.png')}
            />
            <View style={LoadingStyles.bottom}>
                <Image
                    style={LoadingStyles.logo}
                    source={require('../media/imgs/logo.png')}
                />
                <Text style={LoadingStyles.txt}>teachShare. All rights reserved</Text>
            </View>
        </View>
    )
}
