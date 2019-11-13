import React from 'react';
import {View, Text} from 'react-native';
import PageTitle from '../comps/PageTitle';
import CoreCompetenciesSelections from '../comps/CoreCompetencies';
import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';
import CreateStyles from '../styles/CreateStyles';
import CreateBtn from '../comps/CreateBtn';

export default function CreatePost(){
    return(
        <View style={CreateStyles.wrapper}>
            <PageTitle
                title={"Create"}
                msg={"Create a lesson plan"}
            />
            <Text style={CreateStyles.desc}>Select one or multiple competencies to continue</Text>
            <CoreCompetenciesSelections/>
            <CreateBtn/>
        </View>
    )
}
