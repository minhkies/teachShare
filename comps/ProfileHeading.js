import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import ProfileHeadingStyles from '../compstyles/ProfileHeadingStyles';

export default function ProfileHeading({url, name, school}) {
    return (
        <TouchableOpacity style={ProfileHeadingStyles.wrapper}>
            <View style={ProfileHeadingStyles.leftWrapper}>
                <Image
                    source={url}
                    style={ProfileHeadingStyles.profileImg}
                />
                <View>
                    <Text style={ProfileHeadingStyles.nameTxt}>{name}</Text>
                    <Text>{school}</Text>
                </View>
            </View>
            <Image
                source={require('../media/icon/arrow.png')}
                style={ProfileHeadingStyles.arrowImg}
            />
        </TouchableOpacity>
    );
}
