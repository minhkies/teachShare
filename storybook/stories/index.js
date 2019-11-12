import React from 'react';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import Discover from '../../pages/Discover';
import Home from '../../pages/Home';
import { MenuProvider } from 'react-native-popup-menu';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('Homepage', module)
    .add('Home', () => <MenuProvider><Home /></MenuProvider>)
    .add('Discover', () => <MenuProvider><Discover /></MenuProvider>);
