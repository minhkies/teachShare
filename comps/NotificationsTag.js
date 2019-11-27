import React from "react";
import {View, Text, Image} from 'react-native';
import NotificationsTagsStyles from '../compstyles/NotificationTagsStyles';

export default function NotificationsTag({type, data}) {
    let preset = [];

    if (type==="appreciate"){
        if (data <= 1){
            preset = [require('../media/icon/appreciation.png'), data + " new appreciate", "for your posts"]
        } else {
            preset = [require('../media/icon/appreciation.png'), data + " new appreciates", "for your posts"]
        }
    } else if (type==="download"){
        if (data <= 1){
            preset = [require('../media/icon/download.png'), data + " new download", "on your posts"]
        } else {
            preset = [require('../media/icon/download.png'), data + " new downloads", "for your posts"]
        }
    } else if (type==="comment"){
        if (data <= 1) {
            preset = [require('../media/icon/comment.png'), data + " new comment", "on your posts"]
        } else {
            preset = [require('../media/icon/comment.png'), data + " new comments", "on your posts"]
        }
    } else if (type === "reply"){
        preset = [require('../media/icon/comment.png'), data + " replied", "to your comment on a post"]
    }

    return(
        <View style={NotificationsTagsStyles.wrapper}>
            <Image
                source={preset[0]}
                style={NotificationsTagsStyles.icon}
            />
            <Text style={NotificationsTagsStyles.txt}>
                <Text style={NotificationsTagsStyles.boldTxt}>{preset[1]}</Text> {preset[2]}
            </Text>
        </View>
    )
}
