import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import { Actions } from 'react-native-router-flux';

export default function More(){
    let handleSignOut = () => {
        firebase
          .auth()
          .signOut()
          .finally(() => {})
          .catch(error => Actions.login())
    };

    return(
        <View>
            <Text>MORE</Text>
            <TouchableOpacity 
                style={{width: "100%", height: 40, margin: 50}}
                onPress={handleSignOut}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}
