import React from 'react';
import {View, Text} from 'react-native';
import CompetencyTagStyles from '../compstyles/CompetencyTagStyles';

export default function CompetencyTag({c,s,p}){
    let style=[];
    if (c==="Communication"){
        style=[CompetencyTagStyles.comsCommCore, CompetencyTagStyles.comsCommSub, CompetencyTagStyles.comsCommProfile]
    } else if (c==="Thinking"){
        style=[CompetencyTagStyles.comsThinkCore, CompetencyTagStyles.comsThinkSub, CompetencyTagStyles.comsThinkProfile]
    } else {
        style=[CompetencyTagStyles.comsSocialCore, CompetencyTagStyles.comsSocialSub, CompetencyTagStyles.comsSocialProfile]
    }
    return(
        <View
            style={[CompetencyTagStyles.comsCore, style[0]]}
        >
            <Text
                style={CompetencyTagStyles.comsCoreTxt}
                numberOfLines={1}
                ellipsizeMode='tail'
            >{c}</Text>
            <View
                style={[CompetencyTagStyles.comsSub, style[1]]}
            >
                <Text
                    style={CompetencyTagStyles.comsSubTxt}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >{s}</Text>
                <View
                    style={[CompetencyTagStyles.comsProfile, style[2]]}
                >
                    <Text>{p}</Text>
                </View>
            </View>
        </View>
    )
}
