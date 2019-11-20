import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PostTabsStyles from '../compstyles/PostTabsStyles';

export default function PostTabs(){
    let [shared, setShared] = useState(false);
    let [saved, setSaved] = useState(false);
    let [yourPosts, setYourPosts] = useState(true);
    let [tabStyles, setTabStyles] = useState([]);

    const setStyle = () => {
        let tempStyle=[];
        if (yourPosts===true){
            tempStyle=[PostTabsStyles.selectedTabTxt,PostTabsStyles.unSelectedTabTxt,PostTabsStyles.unSelectedTabTxt]
        } else if (saved===true){
            tempStyle=[PostTabsStyles.unSelectedTabTxt,PostTabsStyles.selectedTabTxt,PostTabsStyles.unSelectedTabTxt]
        } else {
            tempStyle=[PostTabsStyles.unSelectedTabTxt,PostTabsStyles.unSelectedTabTxt,PostTabsStyles.selectedTabTxt]
        }
        setTabStyles(tempStyle);
    };

    useEffect(()=>{
       setStyle();
    },[]);

    useEffect(()=>{
        setStyle();
    },[yourPosts]);

    useEffect(()=>{
        setStyle();
    },[saved]);

    useEffect(()=>{
        setStyle();
    },[shared]);

    return(
        <View style={PostTabsStyles.wrapper}>
            <TouchableOpacity
                style={PostTabsStyles.tabWrapper}
                onPress={()=>{
                    setYourPosts(true);
                    setSaved(false);
                    setShared(false);
                }}
            >
                <Text style={[tabStyles[0]]}>Your Posts</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={PostTabsStyles.tabWrapper}
                onPress={()=>{
                    setSaved(true);
                    setYourPosts(false);
                    setShared(false)
                }}
            >
                <Text style={[tabStyles[1]]}>Saved</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={PostTabsStyles.tabWrapper}
                onPress={()=>{
                    setShared(true);
                    setYourPosts(false);
                    setSaved(false);
                }}
            >
                <Text style={[tabStyles[2]]}>Shared</Text>
            </TouchableOpacity>
        </View>
    )
}
