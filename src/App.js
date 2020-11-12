import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import { MemoryRouter } from 'react-router'
import Slide from "./components/slides/slide.component";
import { HashLink } from 'react-router-hash-link';
import {ChevronDown, ChevronUp} from 'react-feather';
import Typist from 'react-typist';


class App extends Component {
    render() {
        return (
            <MemoryRouter>
            <div className="App bg-black">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p className="light-green presentationTitle">
                        <Typist>
                        E-Portfolio about React SE-Course WS 2020/2021
                        </Typist>
                    </p>
                    <HashLink smooth to="#Introduction">
                        <ChevronDown size={48} className="light-green tc"/>
                    </HashLink>
                </header>
                <Slide/>
                <HashLink smooth to="#top">
                    <div className="bg-black tc">
                        <ChevronUp  size={48} className="light-green tc"/>
                    </div>
                </HashLink>
            </div>
            </MemoryRouter>
        );
    }
}

export default App;
