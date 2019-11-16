import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import PageTitle from '../comps/PageTitle';
import ProfileBtn from '../comps/ProfileBtn';
import MoreStyles from '../styles/MoreStyles';
import MoreOptions from '../comps/MoreOptions';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';


export default function More(){
    let UserProfile;
    let [currentUser, setCurrentUser] = useState("");

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    let SignOutUser = async () => {
        try {
            await firebase.auth().signOut()
            .then(() => Actions.login())
        } catch (e) {
            console.log(e);
        }
    };

    let getData = async () => {
        try {
            UserProfile = await AsyncStorage.getItem('UserData');
            UserProfile = JSON.parse(UserProfile);
            setCurrentUser(capitalize(UserProfile.fname) + " " + capitalize(UserProfile.lname));
            if (value !== null) {
                // value previously stored
            }
        } catch (e) {
            // error reading value
        }
    };

    useEffect(()=>{
        getData()
    },[]);

    return(
        <View style={MoreStyles.wrapper}>
            <PageTitle
                title={"More"}
                msg={"View your profile and change the settings"}
            />
            <ProfileBtn
                url={require('../media/imgs/settingsprofileavatar.png')}
                name={currentUser}
            />
            <View style={MoreStyles.settingsWrapper}>
                <Text style={MoreStyles.settingHeadings}>Settings</Text>
                <MoreOptions
                    url={require('../media/icon/set-notification.png')}
                    txt={"Notifications"}
                />
                <MoreOptions
                    url={require('../media/icon/set-support.png')}
                    txt={"Support"}
                />
                <MoreOptions
                    url={require('../media/icon/set-feedback.png')}
                    txt={"Feedback"}
                />
                <MoreOptions
                    url={require('../media/icon/set-about.png')}
                    txt={"About"}
                />
                <Button
                    title={"Log Out"}
                    onPress={()=> SignOutUser()}
                />
            </View>
        </View>
    )
}
