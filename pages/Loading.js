import React from "react";
import {View, Image,Text, } from "react-native";
import LoadingStyles from "../styles/LoadingStyles";
import firebase from 'react-native-firebase';
import {Actions} from 'react-native-router-flux';


export default function Loading() {

    let componentDidMount = (
    firebase.auth().onAuthStateChanged(user => {
      if (user){
        Actions.main()
      } else {
        Actions.login()
      }
    })
    );

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
