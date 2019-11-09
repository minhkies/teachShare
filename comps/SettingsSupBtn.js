import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SettingsSupBtnStyles from '../compstyles/SettingsSupBtnStyles';

export default function SettingsSupBtn() {

  
  return(
            <TouchableOpacity style={SettingsSupBtnStyles.touchOp}
            onPress={()=>{
              
            }}>
                <View style={SettingsSupBtnStyles.cont}>
                  <Image
                      style={SettingsSupBtnStyles.notifIcon}
                      source={require('../media/imgs/settingssupicon.png')}
                  />
                  <Text style={SettingsSupBtnStyles.txt}>Support</Text>
                </View>
                <Image
                    style={SettingsSupBtnStyles.arrowBtn}
                      source={require('../media/imgs/settingsarrowbtn.png')}
                  />
            </TouchableOpacity>
    )
}