import React, {useState} from 'react';
import {View, Text, Picker, Image} from 'react-native';
import DropBoxStyles from "../compstyles/DropBoxStyles"

export default function DropBox({title, data, select}) {
    const [selectedVal, setSelectedVal]= useState("placeholder");
    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };
    return(
            <View style={DropBoxStyles.dropBoxWrapper}>
                <Picker
                    style={DropBoxStyles.dropBoxInp}
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
                    style={DropBoxStyles.dropdownIcon}
                    source={require("../media/icon/arrow.png")}
                />
            </View>
    )
}
