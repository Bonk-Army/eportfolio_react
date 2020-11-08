import logo from './logo.svg';
import './App.css';
import CardList from "./components/cardlist/card-list.component";
import React, {Component} from 'react';

class App extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div className="App">
                <CardList/>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        E-Portfolio React SE-Course WS 2020/2021
                    </p>
                </header>
            </div>
        );
    }
}

export default App;
