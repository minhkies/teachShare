import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import MoreOptions from '../../comps/MoreOptions';
import ProfileBtn from '../../comps/ProfileBtn';

import More from '../../pages/More';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>);

storiesOf('Homepage', module)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('More Page', module)
    .add('More Options', () => <MoreOptions />);

storiesOf('More Page', module)
    .add('Profile Btn', () => <ProfileBtn />);

storiesOf('More Page', module)
    .add('More', () => <More />);

