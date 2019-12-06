import React, {useLayoutEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Navbar from '../comps/Navbar';
import MainRoute from './MainRoute';
import MainStyles from '../styles/MainStyles';

export default function Main() {
  // state = { currentUser: null };
    var ref = React.createRef();
    useLayoutEffect(()=>{
        console.log("refs", ref.current)
    }, []);
  return(
    <View style={MainStyles.main}>
          <MainRoute />
          <Navbar
            OS={Platform.OS}
            ref={{ref}}
          />
    </View>
  )
}
