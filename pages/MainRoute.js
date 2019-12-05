import React, {useEffect, useState} from 'react';
import {View, Text, BackHandler} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './Home';
import Discover from './Discover';
import CreatePost from './CreatePost';
import Notifications from './Notifications';
import More from './More';
import Profile from './Profile';
import Post from './Post';

export default function Route(){

    let [rN, setRN] = useState({
        c: "home",
        s: []
    });
    useEffect(()=>{
        let backHandler = BackHandler.addEventListener('hardwareBackPress', (e)=>{

        });
    },[]);
    return(
        <View style={{flex: 1}}>
            <Router
                backAndroidHandler={(e)=>{
                    console.log("kkkkkkkk", e);
                    if (e.index > 0){
                        setRN(e.routes[e.index].routeName);
                    }
                }}
                onStateChange={(e)=>{
                console.log(e.routes[e.index].routeName);
                setRN(e.routes[e.index].routeName);
            }}>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} initial={rN==='home'}/>
                    <Scene key="discover" component={Discover} initial={rN==='discover'}/>
                    <Scene key="createPost" component={CreatePost} initial={rN==='createPost'}/>
                    <Scene key="notifications" component={Notifications} initial={rN==='notifications'}/>
                    <Scene key="more" component={More} initial={rN==='more'}/>
                    <Scene key="profile" component={Profile}/>
                    <Scene key="post" component={Post}/>
                </Stack>
            </Router>
            <Navbar
                OS={Platform.OS}
                route={rN}
            />
        </View>

    );
}
