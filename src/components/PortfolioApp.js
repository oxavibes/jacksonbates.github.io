import React from 'react';
import Nav from './Nav';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import projects from '../../projects';

export default class PortfolioApp extends React.Component {
    state = {
        show: "about",
        projects: projects
    }
    handleAbout = () => {
        this.setState(()=> ({show: 'about'}))
    }
    handleWork = () => {
        this.setState(()=> ({show: 'work'}))
    }
    handleContact = () => {
        this.setState(()=> ({show: 'contact'}))
    }
    render() {
        return (
            <div>
                <Nav 
                handleAbout = {this.handleAbout}
                handleWork = {this.handleWork}
                handleContact = {this.handleContact}
                />
                {this.state.show === 'about' && <About />}
                {this.state.show === 'work' && <Work projects={this.state.projects}/>}
                {this.state.show === 'contact' && <Contact />}
            </div>
        )
    }
}