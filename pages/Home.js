import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';

export default function Home(){

    let [currentUser, setCurrentUser] = useState("");

    useEffect(()=>{
        const {currentUser} = firebase.auth();
        let ref = firestore().collection('UserProfiles').doc(currentUser && currentUser.uid);

        firebase
            .firestore()
            .runTransaction(async transaction => {
                const currentUser = await transaction.get(ref);
                setCurrentUser(currentUser.data().fname)
            });
    },[]);

    return(
        <ScrollView
            style={HomeStyles.wrapper}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <PageTitle
                title={"Hi, " + currentUser}
                msg={"This homepage is tailored for you!"}
            />
            <SearchBar/>
            <SubjectsFilter/>
        </ScrollView>
    )
}
