import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SettingsNotifBtnStyles from '../compstyles/SettingsNotifBtnStyles';

export default function SettingsNotifBtn() {

  
  return(
            <TouchableOpacity style={SettingsNotifBtnStyles.touchOp}
            onPress={()=>{
              
            }}>
                <View style={SettingsNotifBtnStyles.cont}>
                  <Image
                      style={SettingsNotifBtnStyles.notifIcon}
                      source={require('../media/imgs/settingsnotificon.png')}
                  />
                  <Text style={SettingsNotifBtnStyles.txt}>Notifications</Text>
                </View>
                <Image
                    style={SettingsNotifBtnStyles.arrowBtn}
                      source={require('../media/imgs/settingsarrowbtn.png')}
                  />
            </TouchableOpacity>
    )
}
