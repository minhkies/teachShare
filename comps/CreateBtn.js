import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import CreateBtnStyles from '../compstyles/CreateBtnStyles';
// import DocumentPicker from 'react-native-document-picker';
// const RNFS = require('react-native-fs');
// const RNGRP = require('react-native-get-real-path');
import FilePickerManager from 'react-native-file-picker';

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
        await FilePickerManager.showFilePicker(null, (response) => {
            if (response.didCancel) {
                console.log('User cancelled file picker');
            }
            else if (response.error) {
                console.log('FilePickerManager Error: ', response.error);
            } else {
                tempFile.push([response.fileName, response.path]);
                setSelectedFiles(selectedFiles.concat(tempFile));
            }
        });
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
