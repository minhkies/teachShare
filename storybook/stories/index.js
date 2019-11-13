import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import Notifications from '../../pages/Notifications';
import NotificationsTags from '../../comps/NotificationsTag';
import ProfileBtn from '../../comps/ProfileBtn';
import More from '../../pages/More';
import MoreOptions from '../../comps/MoreOptions';
import CoreCompetenciesSelections from '../../comps/CoreCompetencies';
import CreatePost from '../../pages/CreatePost';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>);

storiesOf('Homepage', module)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('More Page', module)
    .add('Settings Profile Btn', () => <ProfileBtn />)
    .add('Setting Options', () => <MoreOptions/>)
    .add('Page' ,() => <More/>);


storiesOf('Create Page', module)
    .add('Core Competencies', ()=> <CoreCompetenciesSelections/>)
    .add('Page', () => <CreatePost/>);
