import React, {useState} from 'react';
import {View, Text, Picker, Image} from 'react-native';
import DropboxWBoxStyles from '../compstyles/DropBoxWBoxStyles';

export default function DropBoxWBox({title, data, select}) {
    const [selectedVal, setSelectedVal]= useState("placeholder");
    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };
    return(
        <View style={DropboxWBoxStyles.wrapper}>
            <Text style={DropboxWBoxStyles.title}>{capitalize(title)}</Text>
            <View style={DropboxWBoxStyles.dropBoxWrapper}>
                <Picker
                    style={DropboxWBoxStyles.dropBoxInp}
                    onValueChange={(value)=>
                        {
                            setSelectedVal(value);
                            select(value);
                        }}
                selectedValue={selectedVal}
                >
                    <Picker.Item color={"gray"} value={"placeholder"} label={"Select the " + title}/>
                    {
                        data.map((obj)=>{
                            return(
                                <Picker.Item value={obj} label={obj}/>
                            )
                        })
                    }
                </Picker>
                <Image
                    style={DropboxWBoxStyles.dropdownIcon}
                    source={require("../media/icon/arrow.png")}
                />
            </View>
        </View>
    )
}
