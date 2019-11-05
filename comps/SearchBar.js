import React from 'react';
import {Image, TextInput, View} from 'react-native';
import SearchBarStyles from '../compstyles/SearchBarStyles';

export default function SearchBar(){
    return(
        <View style={SearchBarStyles.wrapper}>
            <Image
                style={SearchBarStyles.img}
                source={require("../media/icon/search.png")}
            />
            <TextInput
                style={SearchBarStyles.txtInp}
                placeholder={"Search"}
            />
        </View>
    )
}
