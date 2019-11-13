import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import PageTitle from '../comps/PageTitle';
import ProfileBtn from '../comps/ProfileBtn';
import MoreStyles from '../styles/MoreStyles';
import MoreOptions from '../comps/MoreOptions';
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';
import firestore from '@react-native-firebase/firestore';


export default function More(){

    let [currentUser, setCurrentUser] = useState("");

    let SignOutUser = async () => {
        try {
            await firebase.auth().signOut()
            .then(() => Actions.login())
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(()=>{
        const {currentUser} = firebase.auth();
        let ref = firestore().collection('UserProfiles').doc(currentUser && currentUser.uid);

        firebase
            .firestore()
            .runTransaction(async transaction => {
                const currentUser = await transaction.get(ref);
                setCurrentUser(currentUser.data().fname + " " + currentUser.data().lname)
            });
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
