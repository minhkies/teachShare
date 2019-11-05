import React from 'react';
import {View, Text} from 'react-native';
import PageTitleStyles from '../compstyles/PageTitleStyles';

export default function PageTitle(props) {
    return(
        <View style={PageTitleStyles.wrapper}>
            <Text style={PageTitleStyles.title}>{props.title}</Text>
            <Text style={PageTitleStyles.msg}>{props.msg}</Text>
        </View>
    )
}
