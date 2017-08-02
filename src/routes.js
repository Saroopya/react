import React from 'react';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutUs from './components/About/AboutUs';
import ContactUs from './components/contact/ContactUs';
import {Route, IndexRoute} from 'react-router';


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} /> 
        <Route path="About" component={AboutUs} />
        <Route path="Contact" component={ContactUs} />
    </Route>
)