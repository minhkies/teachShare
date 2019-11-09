import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SettingsProfileBtnStyles from '../compstyles/SettingsProfileBtnStyles';

export default function SettingsProfileBtn() {

  
  return(
        <View>
            <TouchableOpacity style={SettingsProfileBtnStyles.touchOp}
            onPress={()=>{
              
            }}>
                <View style={SettingsProfileBtnStyles.mainCont}>
                  <Image
                      style={SettingsProfileBtnStyles.img}
                      source={require('../media/imgs/settingsprofileavatar.png')}
                  />
                    <View style={SettingsProfileBtnStyles.txt}>
                      <Text style={SettingsProfileBtnStyles.headTxt}>Henry Leung</Text>
                      <Text style={SettingsProfileBtnStyles.bodyTxt}>Profile, posts, password, and more</Text>
                    </View>
                </View>
              </TouchableOpacity>
        </View>
    )
}
