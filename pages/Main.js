import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Navbar from '../comps/Navbar';
import MainRoute from './MainRoute';
import MainStyles from '../styles/MainStyles';

export default function Main() {
  // state = { currentUser: null };
  let [currentUser, setCurrentUser] = useState(this.state);
  return(
    <View style={MainStyles.main}>
      <MainRoute/>
      <Navbar
        OS={Platform.OS}/>
    </View>
  )
}
