import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import PageTitle from '../comps/PageTitle';
import CoreCompetenciesSelections from '../comps/CoreCompetencies';
import CoreCompetenciesStyles from '../compstyles/CoreCompetenciesStyles';
import CreateStyles from '../styles/CreateStyles';
import CreateBtn from '../comps/CreateBtn';
import DropBoxWithBox from '../comps/DropboxWithBox';

export default function CreatePost(){
    const [data, setData] = useState(false);
    let [view, setView] = useState(1);
    if (view === 1){
        return(
            <View style={CreateStyles.wrapper}>
                <PageTitle
                    title={"Create"}
                    msg={"Create a lesson plan"}
                />
                <Text style={CreateStyles.desc}>Select one or multiple competencies to continue</Text>
                <CoreCompetenciesSelections
                    setData={setData}
                />
                <CreateBtn
                    data={data}
                    setView={setView}
                />
            </View>
        )
    } else {
        return(
            <ScrollView>
                <DropBoxWithBox
                    title={"Subject"}
                />
            </ScrollView>
        )
    }
}
