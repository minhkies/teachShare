import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SettingsAbtBtnStyles from '../compstyles/SettingsAbtBtnStyles';

export default function SettingsAbtBtn() {

  
  return(
            <TouchableOpacity style={SettingsAbtBtnStyles.touchOp}
            onPress={()=>{
              
            }}>
                <View style={SettingsAbtBtnStyles.cont}>
                  <Image
                      style={SettingsAbtBtnStyles.notifIcon}
                      source={require('../media/imgs/settingsabticon.png')}
                  />
                  <Text style={SettingsAbtBtnStyles.txt}>About</Text>
                </View>
                <Image
                    style={SettingsAbtBtnStyles.arrowBtn}
                      source={require('../media/imgs/settingsarrowbtn.png')}
                  />
            </TouchableOpacity>
    )
}