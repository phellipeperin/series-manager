import React from 'react';

import AccountView from '../views/Account/AccountView';
import HomeView from '../views/Home/HomeView';
import SeriesView from '../views/Series/SeriesView';

const routeList = [
    { key: 'home', title: 'Home', icon: 'home', component: HomeView },
    { key: 'my-series', title: 'My Series', icon: 'television', component: SeriesView },
    { key: 'account', title: 'My Account', icon: 'account', component: AccountView },
];

export default routeList;
