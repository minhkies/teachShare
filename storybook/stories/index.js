import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import SettingsProfileBtn from '../../comps/SettingsProfileBtn';
import SettingsNotifBtn from '../../comps/SettingsNotifBtn';
import SettingsSupBtn from '../../comps/SettingsSupBtn';
import SettingsFeedBtn from '../../comps/SettingsFeedBtn';
import SettingsAbtBtn from '../../comps/SettingsAbtBtn';
import More from '../../pages/More';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>);

storiesOf('Homepage', module)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('More Page', module)
    .add('Settings Profile Btn', () => <SettingsProfileBtn />);

storiesOf('More Page', module)
    .add('Settings Notif Btn', () => <SettingsNotifBtn />);

storiesOf('More Page', module)
    .add('Settings Sup Btn', () => <SettingsSupBtn />);

storiesOf('More Page', module)
    .add('Settings Feed Btn', () => <SettingsFeedBtn />);

storiesOf('More Page', module)
    .add('Settings Abt Btn', () => <SettingsAbtBtn />);

storiesOf('More Page', module)
    .add('Settings Title', () => <SettingsTitle />);

storiesOf('More Page', module)
    .add('More', () => <More />);

