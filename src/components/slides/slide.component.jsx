import React, {Component} from 'react';
import 'tachyons';
import {slides} from "./slides.text";
import List from 'rc-virtual-list';
import {Heart} from "react-feather";

const slide2 = slides;

class Slide extends Component{

constructor(props) {
    super(props);
    this.state = {
        visible: true
    };
    this.clickedFunction = this.clickedFunction.bind(this);
}

    clickedFunction() {
        this.setState(state => ({      visible: !state.visible    }));
    }

    render() {


    return (
        <div className="bg-black">
        {slide2.map(slide => (
        <article className="yellow cf ph3 ph5-ns pv5 p5 center" id={slide.topic}>
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2 tl">
                    {slide.topic}
                </h1>
            </header>
            <div className="white fn fl-ns w-50-ns">
                <p className="f5 lh-copy measure mt0-ns">

                    {this.state.visible ?
                    <List data={slide.text} itemKey="id" className="tl pb2 fw3 f4">
                        {index => <li>{index}</li>}
                    </List> : console.log('hidden bro')}
                </p>
                <Heart onClick={this.clickedFunction}>I am hidden</Heart>
            </div>
        </article>
        ))}
        </div>
    );}
}

export default Slide;

