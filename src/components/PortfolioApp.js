import React from 'react';
import {Route} from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';


export default class PortfolioApp extends React.Component {
    state = {
        projects: []
    }

    render() {
        return (
            <div>
                <Nav />
                <Route exact path='/' component={About}/>
                <Route path='/work' component={Work}/>
                <Route path='/contact' component={Contact}/>                
            </div>
        )
    }
}