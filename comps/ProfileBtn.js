import React from 'react';
import {View, Text, TouchableOpacity, Image, ImageBackground} from 'react-native';
import ProfileBtnStyles from '../compstyles/ProfileBtnStyles';

export default function ProfileBtn({url, name}) {


  return(
        <View style={ProfileBtnStyles.wrapper}>
            <TouchableOpacity style={ProfileBtnStyles.touchOp}>
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
                        sourse={require('../media/icon/right-arrow.png')}
                        style={ProfileBtnStyles.arrow}
                    />
                </View>
            </TouchableOpacity>
        </View>
    )
}
