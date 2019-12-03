import React from 'react';
import { View } from 'react-native';
import "./ReactotronConfig";

// import the different screens
import AppStyles from './styles/AppStyles';
import Route from './Route';
import { MenuProvider } from 'react-native-popup-menu';

function App() {
    console.disableYellowBox = true;
    return (
        <MenuProvider>
            <View style={AppStyles.app}>
                <Route/>
            </View>    
        </MenuProvider>
    )
}

// export default from "./storybook";
export default App;
