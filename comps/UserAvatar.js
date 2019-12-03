import React from 'react';
import {View, Text, Image} from 'react-native';
import UserAvatarStyles from '../compstyles/UserAvatarStyles';

export default function UserAvatar({user}) {

    function renderElement() {
        if (user && user.photoUrl) {
           return  <Image style={UserAvatarStyles.img} source={{uri: user.photoUrl}}/>;
        }

        if (user && user.name) {
            return <Text style={UserAvatarStyles.txt}>{user.name[0].toUpperCase()}</Text>;
        }

        return null;
    }

    return(
        <View style={UserAvatarStyles.container}>
            {renderElement()}
        </View>
    )
}
