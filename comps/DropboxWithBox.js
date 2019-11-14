import React from 'react';
import {View, Text, Picker} from 'react-native';

export default function DropBoxWithBox({title}) {
    return(
        <View>
            <Text>{title}</Text>
            <Picker>
                <Picker.Item label={"Math"}/>
                <Picker.Item label={"English"}/>
            </Picker>
        </View>
    )
}
