import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import routes from './routes';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import configureStore from './store/configureStore';
import {loadObjects} from './actions/testActions';


const store = configureStore();  // Of we wanted initial state of our app, we could have set it here.

store.dispatch(loadObjects()); // dispatch is part of store!

render (<Provider store={store}>
            <Router history={browserHistory} routes={routes}/>
        </Provider>, // Provider components wraps around whole app, so it can be connected to store
 document.getElementById('app')); 


