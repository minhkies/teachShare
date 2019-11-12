import React from 'react';
import { View } from 'react-native';
import AppStyles from './styles/AppStyles';
import Route from './Route';
import { MenuProvider } from 'react-native-popup-menu';

function App() {
    return (
        <MenuProvider>
            <View style={AppStyles.app}>
                <Route/>
            </View>    
        </MenuProvider>
    )
}

export default App; //from "./storybook";