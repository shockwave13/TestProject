import React, { Component } from 'react';
import AppNavigation from './navigation';

import store from './store/store';
import {Provider} from 'react-redux';


const App = () => (
    <Provider store={store}>
        <AppNavigation/>
    </Provider>
)


export default App;