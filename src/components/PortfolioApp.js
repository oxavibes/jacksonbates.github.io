import React from 'react';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import projects from '../../projects';

export default class PortfolioApp extends React.Component {
    state = {
        projects: projects
    }
    
    render() {
        return (
            <div>
                <Nav />
                <About />
                <Work projects={this.state.projects}/>
                <Contact />
            </div>
        )
    }
}