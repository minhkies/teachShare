import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import CreateBtnStyles from '../compstyles/CreateBtnStyles';
import DocumentPicker from 'react-native-document-picker';
const RNFS = require('react-native-fs');

/**
 * @return {null}
 */

export default function CreateBtn({page, data, setView, selectedFiles, setSelectedFiles}){
    let img;


    if (page === 1){
        img = require('../media/icon/next.png')
    } else {
        img = require('../media/icon/upload.png')
    }

    let uploadFiles = async () => {
        let tempFile = [];
        try {
            const results = await DocumentPicker.pickMultiple({
                type: [DocumentPicker.types.allFiles],
            });
            await results.map((o,i)=>{
                RNFS.readDir(o.uri)
                    .then((res)=>{console.log(res)})
                    .catch((e)=>console.log(e.message));
                tempFile.push([o.name, o.uri]);
            });
            setSelectedFiles(selectedFiles.concat(tempFile));
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
            } else {
                throw err;
            }
        }
    };


    if (data===true){
    return(
        <TouchableOpacity
            style={CreateBtnStyles.wrapper}
            onPress={()=>{
                if (page === 1) {
                    setView(2);
                } else {
                    uploadFiles();
                }
            }}
        >
            <Image
                style={CreateBtnStyles.btn}
                source={img}
            />
        </TouchableOpacity>

    )} else {
        return null
    }

}
