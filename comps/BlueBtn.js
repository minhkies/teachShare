import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import BlueBtnStyles from '../compstyles/BlueBtnStyles';

export default function BlueBtn({txt, func, isLeft}){
    return(
        <TouchableOpacity style={BlueBtnStyles.wrapper}>
            <Text style={BlueBtnStyles.txt}>{txt}</Text>
        </TouchableOpacity>
    )
}
