import React from 'react';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import Discover from '../../pages/Discover';
import Home from '../../pages/Home';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('Homepage', module)
    .add('Home', () => <Home />)
    .add('Discover', () => <Discover />);
