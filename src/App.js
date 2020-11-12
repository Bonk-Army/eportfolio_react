import logo from './logo.svg';
import './App.css';
import CardList from "./components/cardlist/card-list.component";
import React, {Component} from 'react';
import SocialLogoComponent from "./components/sociallogos/social-logo.component";
import {Route, BrowserRouter as Router} from "react-router-dom";
import { MemoryRouter } from 'react-router'
import Slide from "./components/slides/slide.component";
import { HashLink } from 'react-router-hash-link';
import { ChevronUp } from 'react-feather';

class App extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <MemoryRouter>
            <div className="App bg-black">
                <CardList/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p className="presentationTitle">
                        E-Portfolio React SE-Course WS 2020/2021
                    </p>
                    <SocialLogoComponent />
                </header>
                <Slide/>
                <HashLink smooth to="#top">
                    <div className="bg-black tc">
                        <ChevronUp color="yellow"/>
                    </div>
                </HashLink>
            </div>
            </MemoryRouter>
        );
    }
}

export default App;
