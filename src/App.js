import logo from './logo.svg';
import './App.css';
import CardList from "./components/cardlist/card-list.component";
import React, {Component} from 'react';
import SocialLogoComponent from "./components/sociallogos/social-logo.component";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Slide from "./components/slides/slide.component";
import { HashLink } from 'react-router-hash-link';
import { ChevronUp } from 'react-feather';

class App extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <Router>
                <Route></Route>
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
                    <div className="tc pa4">
                        <ChevronUp color="yellow" size={48}/>
                    </div>
                </HashLink>
            </div>

            </Router>
        );
    }
}

export default App;
