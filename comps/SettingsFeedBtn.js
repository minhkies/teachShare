import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SettingsFeedBtnStyles from '../compstyles/SettingsFeedBtnStyles';

export default function SettingsFeedBtn() {

  
  return(
            <TouchableOpacity style={SettingsFeedBtnStyles.touchOp}
            onPress={()=>{
              
            }}>
                <View style={SettingsFeedBtnStyles.cont}>
                  <Image
                      style={SettingsFeedBtnStyles.notifIcon}
                      source={require('../media/imgs/settingsfeedbackicon.png')}
                  />
                  <Text style={SettingsFeedBtnStyles.txt}>Feedback</Text>
                </View>
                <Image
                    style={SettingsFeedBtnStyles.arrowBtn}
                      source={require('../media/imgs/settingsarrowbtn.png')}
                  />
            </TouchableOpacity>
    )
}