import React from 'react';
import {Image} from 'react-native';
import CreateBtnStyles from '../compstyles/CreateBtnStyles';

export default function CreateBtn(){
    return(
        <Image
            style={CreateBtnStyles.btn}
            source={require('../media/icon/next.png')}
        />
    )

}
