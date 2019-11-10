/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


// import the different screens
import Loading from './pages/Loading'
import Register from './pages/Register'
import Login from './pages/Login'
import Main from './pages/Main'
import Router from './Route'
import AppStyles from './styles/AppStyles';
import Route from './Route';

function App() {
    return (
        <View style={AppStyles.app}>
            <Route/>
        </View>
    )
}

export default from "./storybook";