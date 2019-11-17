import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PageTitle from '../comps/PageTitle';
import HomeStyles from '../styles/HomeStyles';
import SearchBar from '../comps/SearchBar';
import SubjectsFilter from '../comps/SubjectsFilter';
import firebase from 'react-native-firebase';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home() {
    let UserProfile, TeachingSubjects;
    let [currentUser, setCurrentUser] = useState('');

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

    useEffect(() => {
        getData();
    }, );

    return (
        <ScrollView
            style={HomeStyles.wrapper}
            stickyHeaderIndices={[1]}
            showsVerticalScrollIndicator={false}>
            <PageTitle
                title={'Hi, ' + currentUser}
                msg={'This homepage is tailored for you!'}
            />
            <SearchBar/>
            <SubjectsFilter/>
        </ScrollView>
    );
}
