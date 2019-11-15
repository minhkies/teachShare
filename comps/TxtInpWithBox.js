import React from 'react';
import {Text, TextInput, View} from 'react-native';
import TxtInpWBoxStyles from '../compstyles/TextInpWBoxStyles';

export default function TxtInpWBox({title, placeholder, multiline, set}) {
    let styleType;
    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };
    if (multiline===true){
        styleType = TxtInpWBoxStyles.inpMulti
    } else {
        styleType = TxtInpWBoxStyles.inpReg
    }
    return (
        <View style={TxtInpWBoxStyles.inpWrapper}>
            <Text style={TxtInpWBoxStyles.inpHeading}>{capitalize(title)}</Text>
            <TextInput
                style={[TxtInpWBoxStyles.inp, styleType]}
                multiline={multiline}
                placeholder={capitalize(placeholder)}
                onChangeText={(txt) => {
                    set(txt);
                }}
            />
        </View>
    );
};
