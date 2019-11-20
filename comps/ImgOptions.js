import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import ImagePicker from 'react-native-image-picker';
import ImgOptionsStyles from '../compstyles/ImgOptionsStyles';
import options from '../data/CoreCompetenciesData';
import firebase from 'react-native-firebase';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';


export default function ImgOptions({title, type, topic, setUri, uri}) {

    let [autoBtnStyles, setAutoBtnStyles] = useState(ImgOptionsStyles.unselectedBtn);
    let [uploadBtnStyles, setUploadBtnStyles] = useState(ImgOptionsStyles.unselectedBtn);
    let [autoTxtStyles, setAutoTxtStyles] = useState(ImgOptionsStyles.unselectedBtnTxt);
    let [uploadTxtStyles, setUploadTxtStyles] = useState(ImgOptionsStyles.unselectedBtnTxt);
    let [autoBtn, setAutoBtn] = useState(false);
    let [uploadBtn, setUploadBtn] = useState(false);
    let [img, setImg] = useState("");

    const capitalize = (s) => {
        if (typeof s !== 'string') {return ''} else {
            return s.charAt(0).toUpperCase() + s.slice(1)}
    };

    if (autoBtn === true){
        autoBtnStyles = ImgOptionsStyles.selectedBtn;
        autoTxtStyles = ImgOptionsStyles.selectedTxt;
    } else {
        autoBtnStyles = ImgOptionsStyles.unselectedBtn;
        autoTxtStyles = ImgOptionsStyles.unselectedTxt;
    }

    if (uploadBtn === true){
        uploadBtnStyles = ImgOptionsStyles.selectedBtn;
        uploadTxtStyles = ImgOptionsStyles.selectedTxt;
    } else {
        uploadBtnStyles = ImgOptionsStyles.unselectedBtn;
        uploadTxtStyles = ImgOptionsStyles.unselectedTxt;
    }

    function getAutoImage(){
        if (type === "create"){
            fetch('https://source.unsplash.com/1600x900/?' + topic).then((response)=> {
                setImg(response.url);
            })
        }

    }

    // function uploadImage(){
    //     ImagePicker.launchImageLibrary(options,(response) => {
    //         if(response.didCancel){
    //             setUploadBtn(false)
    //         } else if (response.error){
    //             setUploadBtn(false)
    //         } else {
    //             setImg(response.uri);
    //             setUri(response.uri);
    //         }
    //     })
    // }

    async function uploadImage(){
        if (type==="create"){
            try{
                await ImagePicker.openPicker({
                    width: 1600,
                    height: 900,
                    cropping: true,
                }).then(image => {
                    setUri(image.path)
                })
            } catch (e) {
                setUploadBtn(false);
            }
        } else {
            try{
                await ImagePicker.openPicker({
                    width: 500,
                    height: 500,
                    cropping: true,
                    cropperCircleOverlay: true
                }).then(image => {
                    setUri(image.path)
                })
            } catch (e) {
                setUploadBtn(false);
            }
        }
    }


    return(
        <View style={ImgOptionsStyles.wrapper}>
            <Text style={ImgOptionsStyles.title}>{capitalize(title)}</Text>
            <View style={ImgOptionsStyles.selectionWrapper}>
                <TouchableOpacity
                    style={[ImgOptionsStyles.btn, ImgOptionsStyles.autoBtn, autoBtnStyles]}
                    onPress={()=>{
                        setAutoBtn(true);
                        setUploadBtn(false);
                        getAutoImage();
                    }}>
                    <Text style={[ImgOptionsStyles.btnTxt, autoTxtStyles]}>Auto</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[ImgOptionsStyles.btn, uploadBtnStyles]}
                    onPress={()=>{
                        setUploadBtn(true);
                        setAutoBtn(false);
                        uploadImage();
                    }}
                >
                    <Text style={[ImgOptionsStyles.btnTxt, uploadTxtStyles]}>Upload</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
