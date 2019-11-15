import React from 'react';
import {View, Text, Picker, Image} from 'react-native';
import DropBoxWithBoxStyles from '../compstyles/DropboxWithBoxStyles';

export default function DropBoxWithBox({title, data, select, nextFunc}) {
    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };
    return(
        <View style={DropBoxWithBoxStyles.wrapper}>
            <Text style={DropBoxWithBoxStyles.title}>{capitalize(title)}</Text>
            <View style={DropBoxWithBoxStyles.dropBoxWrapper}>
                <Picker
                    style={DropBoxWithBoxStyles.dropBoxInp}
                    onValueChange={(value)=>
                        {select(value);
                        nextFunc();
                        }}
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
                    style={DropBoxWithBoxStyles.dropdownIcon}
                    source={require("../media/icon/arrow.png")}
                />
            </View>
        </View>
    )
}
