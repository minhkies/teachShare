import React, {useEffect, useState, useContext} from 'react';
import {View, Text, BackHandler} from 'react-native';
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
    return(
        <Router>
            <Stack key="root" hideNavBar={true}>
                <Scene key="home" component={Home} initial={true}/>
                <Scene key="discover" component={Discover} />
                <Scene key="createPost" component={CreatePost} />
                <Scene key="notifications" component={Notifications} />
                <Scene key="more" component={More} />
                <Scene key="profile" component={Profile} />
                <Scene key="post" component={Post} />
            </Stack>
        </Router>
    );
}
