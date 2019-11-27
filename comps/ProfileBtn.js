import React from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import ProfileBtnStyles from '../compstyles/ProfileBtnStyles';
import {Actions} from 'react-native-router-flux';

export default function ProfileBtn({url, name}) {


  return(
        <View style={ProfileBtnStyles.wrapper}>
            <TouchableOpacity
                style={ProfileBtnStyles.touchOp}
                onPress={()=>{Actions.profile()}}
            >
                <Image
                    source={require('../media/imgs/profilebtn.png')}
                    style={ProfileBtnStyles.BtnBgImg}
                >
                </Image>
                <View style={ProfileBtnStyles.BtnContentWrapper}>
                    <Image
                        source={url}
                        style={ProfileBtnStyles.profileImg}
                    />
                    <View style={ProfileBtnStyles.nameWrapper}>
                        <Text style={ProfileBtnStyles.name}>{name}</Text>
                        <Text style={ProfileBtnStyles.desc}>View profiles, account settings</Text>
                    </View>
                    <Image
                        sourse={require('../media/icon/arrow.png')}
                        style={ProfileBtnStyles.arrow}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
