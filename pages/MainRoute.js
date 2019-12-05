import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Home from './Home';
import Discover from './Discover';
import CreatePost from './CreatePost';
import Notifications from './Notifications';
import More from './More';
import Profile from './Profile';
import Post from './Post';
import Navbar from '../comps/Navbar';

export default function Route(){

    let [rN, setRN] = useState('home');
    return(
        <View style={{flex: 1}}>
            <Router onStateChange={(e)=>{
                console.log(e.routes[e.index].routeName);
                setRN(e.routes[e.index].routeName);
            }}>
                <Stack key="root" hideNavBar={true}>
                    <Scene key="home" component={Home} initial={rN==='home'}/>
                    <Scene key="discover" component={Discover} initial={rN==='discover'}/>
                    <Scene key="createPost" component={CreatePost} initial={rN==='createPost'}/>
                    <Scene key="notifications" component={Notifications} initial={rN==='notifications'}/>
                    <Scene key="more" component={More} initial={rN==='more'}/>
                    <Scene key="profile" component={Profile} initial={rN==='profile'}/>
                    <Scene key="post" component={Post} initial={rN==='post'}/>
                </Stack>
            </Router>
            <Navbar
                OS={Platform.OS}
                route={rN}
            />
        </View>

    );
}
