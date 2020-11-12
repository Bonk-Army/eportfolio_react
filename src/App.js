import logo from './logo.svg';
import './App.css';
import CardList from "./components/cardlist/card-list.component";
import React, {Component} from 'react';
import SocialLogoComponent from "./components/sociallogos/social-logo.component";
import { MemoryRouter } from 'react-router'
import Slide from "./components/slides/slide.component";
import { HashLink } from 'react-router-hash-link';
import {ChevronDown, ChevronUp} from 'react-feather';
import Typist from 'react-typist';


class App extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <MemoryRouter>
            <div className="App bg-black">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p className="yellow presentationTitle">
                        <Typist>
                        E-Portfolio about React SE-Course WS 2020/2021
                        </Typist>
                    </p>
                    <HashLink smooth to="#Introduction">
                        <ChevronDown size={48} className="yellow tc"/>
                    </HashLink>
                </header>
                <Slide/>
                <HashLink smooth to="#top">
                    <div className="bg-black tc">
                        <ChevronUp  size={48} color="yellow"/>
                    </div>
                </HashLink>
            </div>
            </MemoryRouter>
        );
    }
}

export default App;
