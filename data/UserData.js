import {useEffect} from 'react';
import firebase from "react-native-firebase";
import firestore from '@react-native-firebase/firestore';

let UserData = () => {
        const {currentUser} = firebase.auth();
        let ref = firestore().collection('UserProfiles').doc(currentUser && currentUser.uid);

        firebase
            .firestore()
            .runTransaction(async transaction => {
                const currentUser = await transaction.get(ref);
                UserData = currentUser.data()
            });
    console.log("called", UserData);
    return UserData;
};

export default UserData;


