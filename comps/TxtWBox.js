import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import TxtWBoxStyles from '../compstyles/TxtWBoxStyles';

export default function TxtWBox({title, selectedFiles, setSelectedFiles}){
    let [files, setFiles] = useState([]);

    function LoadList(){
        console.log('run2', selectedFiles);

    }

    // useEffect(()=>{
    //     LoadList()
    // },[selectedFiles]);

    return(
        <View style={TxtWBoxStyles.wrapper}>
            <Text style={TxtWBoxStyles.title}>{title}</Text>
            <View style={TxtWBoxStyles.listWrapper}>
                {selectedFiles.map((o,i)=>{
                    return(
                        <Text style={TxtWBoxStyles.txt}>{o[0]}</Text>
                    )
                })}
            </View>
        </View>
    )
}
