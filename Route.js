import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Register from './pages/Register';
import Loading from './pages/Loading';
import Main from './pages/Main';

export default function Route(){
  return(
  <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="loading" component={Loading} initial={true}/>
      <Scene key="login" component={Login}/>
      <Scene key="register" component={Register}/>
      <Scene key="main" component={Main}/>
    </Stack>
  </Router>
);
}
