import React, {useState} from 'react';
import {View, Text, Picker, Image} from 'react-native';
import DropBoxWBoxStyles from '../compstyles/DropBoxWBoxStyles';

export default function DropBoxWBox({title, data, select}) {
    const [selectedVal, setSelectedVal]= useState("placeholder");
    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };
    return(
        <View style={DropBoxWBoxStyles.wrapper}>
            <Text style={DropBoxWBoxStyles.title}>{capitalize(title)}</Text>
            <View style={DropBoxWBoxStyles.dropBoxWrapper}>
                <Picker
                    style={DropBoxWBoxStyles.dropBoxInp}
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
                    style={DropBoxWBoxStyles.dropdownIcon}
                    source={require("../media/icon/arrow.png")}
                />
            </View>
        </View>
    )
}
