import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import CreateBtnStyles from '../compstyles/CreateBtnStyles';
import {Actions} from 'react-native-router-flux';

/**
 * @return {null}
 */

export default function CreateBtn({data, setView}){
    if (data===true){
    return(
        <TouchableOpacity
            style={CreateBtnStyles.wrapper}
            onPress={()=>{
                setView(2)
            }}
        >
            <Image
                style={CreateBtnStyles.btn}
                source={require('../media/icon/next.png')}
            />
        </TouchableOpacity>

    )} else {
        return null
    }

}
