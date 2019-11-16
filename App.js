/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import "./ReactotronConfig";
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
import AppStyles from './styles/AppStyles';
import Route from './Route';

function App() {
    console.disableYellowBox = true;
    return (
        <View style={AppStyles.app}>
      <Route/>
    </View>

    )
}

// export default from "./storybook";
export default App;
