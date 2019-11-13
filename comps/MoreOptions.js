import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import MoreOptionsStyles from '../compstyles/MoreOptionsStyles';

export default function MoreOptions({url, txt}){
    return(
        <TouchableOpacity
            onPress={()=>{}}
            style={MoreOptionsStyles.wrapper}
        >
            <View style={MoreOptionsStyles.leftComps}>
                <Image
                    source={url}
                    style={MoreOptionsStyles.img}
                />
                <Text>{txt}</Text>
            </View>
            <Image
                style={MoreOptionsStyles.arrow}
                source={require('../media/icon/morearrow.png')}
            />
        </TouchableOpacity>
    )
};
