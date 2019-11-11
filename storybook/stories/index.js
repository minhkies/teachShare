import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';
import SearchBar from '../../comps/SearchBar';
import SubjectsFilter from '../../comps/SubjectsFilter';
import CoreCompetenciesSelections from '../../comps/CoreCompetencies';
import CompetenciesSub from '../../comps/CompetenciesSub';

storiesOf('Universal', module)
    .add('Nav Bar', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>)
    .add('Search Bar', ()=><SearchBar/>);

storiesOf('Homepage', module)
    .add('Subjects Filter', () => <SubjectsFilter />);

storiesOf('Create Page', module)
    .add('Core Competencies', ()=> <CoreCompetenciesSelections/>);
    // .add('Competencies Sub', () => <CompetenciesSub/>);
