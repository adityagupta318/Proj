import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import TestComponent from './components/testComponent/TestComponent';
import TestComponentView from './components/testComponent/TestComponentView';
import TagStreamsComponent from './components/tagging/TagStreamsComponent';

export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="test" component={TestComponent} />
        <Route path="testView" component={TestComponentView} />
        <Route path="tagStreams" component={TagStreamsComponent} />
    </Route>
);