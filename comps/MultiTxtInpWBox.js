import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert, Linking} from 'react-native';
import MulTxtInpWBoxStyles from '../compstyles/MultiTxtInpWBoxStyles';

export default function MultiTxtInpWBox({title, placeholder, setLinks, links}){
    let [tempUrl, setTempUrl] = useState();

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    let test = () =>{
        let obj = ["http://", "https://", "http://www.", "https://wwwww.","wwww."];
        obj.map((o,i)=>{
           tempUrl.startsWith(o) && (tempUrl = tempUrl.split(o).pop())
        });
        let c = 0;
        links.map((o,i)=>{
            o === tempUrl && c++
        });
        c > 0 ? Alert.alert("This link is already added") : (setLinks(links.concat(tempUrl)));
    };

    return(
        <View style={MulTxtInpWBoxStyles.wrapper}>
            <Text style={MulTxtInpWBoxStyles.inpHeading}>{capitalize(title)}</Text>
            <View style={MulTxtInpWBoxStyles.inpWrapper}>
                <TextInput
                    style={MulTxtInpWBoxStyles.inp}
                    placeholder={capitalize(placeholder)}
                    onChangeText={(val)=>{
                        setTempUrl(val)
                    }}
                />
                <TouchableOpacity
                    style={MulTxtInpWBoxStyles.btn}
                    onPress={()=>{test()}}
                >
                    <Text style={MulTxtInpWBoxStyles.btnTxt}>Add</Text>
                </TouchableOpacity>
            </View>
            <View style={MulTxtInpWBoxStyles.listWrapper}>
                {
                    links.map((o,i)=>{
                        return(
                            <Text
                                style={MulTxtInpWBoxStyles.link}
                                onPress={()=>{Linking.openURL("http://wwww." + o)}}
                            >
                                {o}
                            </Text>
                        )
                    })
                }
            </View>
        </View>
    )
}
