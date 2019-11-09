import React from 'react';
import {View, Text} from 'react-native';
import PageTitle from '../comps/PageTitle';
import SettingsProfileBtn from '../comps/SettingsProfileBtn';
import SettingsNotifBtn from '../comps/SettingsNotifBtn';
import SettingsSupBtn from '../comps/SettingsSupBtn';
import SettingsFeedBtn from '../comps/SettingsFeedBtn';
import SettingsAbtBtn from '../comps/SettingsAbtBtn';


export default function More(){
    return(
        <View>
            <PageTitle 
                title={"Settings"}
                msg={"View your profile and change the settings"}
            />
            <SettingsProfileBtn />
            <SettingsNotifBtn />
            <SettingsSupBtn />
            <SettingsFeedBtn />
            <SettingsAbtBtn />
 
        </View>
    )
}
