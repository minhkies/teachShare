import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Navbar from '../comps/Navbar';
import MainRoute from './MainRoute';
import MainStyles from '../styles/MainStyles';

export default function Main() {
  // state = { currentUser: null };

    const [route, setRoute] = useState(null);
  return(
    <View style={MainStyles.main}>
      <MainRoute />
    </View>
  )
}
