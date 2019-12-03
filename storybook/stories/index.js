import React from 'react';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import Discover from '../../pages/Discover';
import Home from '../../pages/Home';
import { MenuProvider } from 'react-native-popup-menu';
import Notifications from '../../pages/Notifications';
import NotificationsTag from '../../comps/NotificationsTag';
import MoreOptions from '../../comps/MoreOptions';
import ProfileBtn from '../../comps/ProfileBtn';
import More from '../../pages/More';
import CoreCompetenciesSelections from '../../comps/CoreCompetencies';
import Home from '../../pages/Home';
import CreatePost from '../../pages/CreatePost';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('Homepage', module)
    .add('Home', () => <MenuProvider><Home /></MenuProvider>)
    .add('Discover', () => <MenuProvider><Discover /></MenuProvider>);
    .add('Subjects Filter', () => <SubjectsFilter />)
    .add('Page', () => <Home/>);

storiesOf('Create Page', module)
    .add('Core Competencies', ()=> <CoreCompetenciesSelections/>)
    .add('Page', () => <CreatePost/>);

storiesOf('Notifications Page', module)
    .add('Notifications Tag', ()=> <NotificationsTag/>)
    .add('Page', () => <Notifications/>);

storiesOf('More Page', module)
    .add('Profile Btn', () => <ProfileBtn />)
    .add('More Options', () => <MoreOptions />)
    .add('Page', () => <More />);

