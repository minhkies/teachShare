import React from 'react';
import {View, Text} from 'react-native';
import PageTitle from '../comps/PageTitle';
import ProfileBtn from '../comps/ProfileBtn';
import MoreStyles from '../styles/MoreStyles';
import MoreOptions from '../comps/MoreOptions';


export default function More(){
    return(
        <View style={MoreStyles.wrapper}>
            <PageTitle
                title={"More"}
                msg={"View your profile and change the settings"}
            />
            <ProfileBtn
                url={require('../media/imgs/settingsprofileavatar.png')}
                name={"Ramneet Greywall"}
            />
            <View style={MoreStyles.settingsWrapper}>
                <Text style={MoreStyles.settingHeadings}>Settings</Text>
                <MoreOptions
                    url={require('../media/icon/set-notification.png')}
                    txt={"Notifications"}
                />
                <MoreOptions
                    url={require('../media/icon/set-support.png')}
                    txt={"Support"}
                />
                <MoreOptions
                    url={require('../media/icon/set-feedback.png')}
                    txt={"Feedback"}
                />
                <MoreOptions
                    url={require('../media/icon/set-about.png')}
                    txt={"About"}
                />
            </View>
        </View>
    )
}
