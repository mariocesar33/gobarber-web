import React from 'react';
import { Routes } from 'react-router-dom';

import Routee from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashbord from '../pages/Dashboard';

const Routess: React.FC = () => (
  <Routes>
    <Routee path='/' component={SignIn} />
    <Routee path='/signup' component={SignUp} />

    <Routee path='/dashboard' component={Dashbord} isPrivate />
  </Routes>
);

export default Routess;
