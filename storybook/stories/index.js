import React from 'react';
import { Text } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import Navbar from '../../comps/Navbar';
import PageTitle from '../../comps/PageTitle';

storiesOf('Pages', module)
    .add('to Storybook', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>);

storiesOf('Buttons', module)
    .add('to Storybook', () => <Navbar />)
    .add('Page Title', ()=><PageTitle/>);
