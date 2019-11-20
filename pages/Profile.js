import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileHeading from '../comps/ProfileHeading';
import ProfileStyles from '../styles/ProfileStyles';
import BlueBtn from '../comps/BlueBtn';
import PostTabs from '../comps/PostTabs';

export default function Profile() {
    let tempUserProfile;
    let [userInfo, setUserInfo] = useState({});


    const capitalize = (s) => {
        if (typeof s !== 'string') {
            return '';
        } else {
            return s.charAt(0).toUpperCase() + s.slice(1);
        }
    };

    let getData = async () => {
        try {
            tempUserProfile = await AsyncStorage.getItem('userData');
            setUserInfo(JSON.parse(tempUserProfile));
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <ScrollView style={ProfileStyles.wrapper}>
            <ProfileHeading
                url={{uri: userInfo.photo}}
                name={capitalize(userInfo.fname) + ' ' + capitalize(userInfo.lname)}
                school={userInfo.school}
            />
            <Text style={ProfileStyles.bioTxt}>{userInfo.bio}</Text>
            <View style={ProfileStyles.btnWrapper}>
                <BlueBtn
                    txt={'Follow'}
                />
                <BlueBtn
                    txt={'Message'}
                />
            </View>
            <PostTabs/>
        </ScrollView>
    );

}
