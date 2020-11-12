import React, {Component} from 'react';
import 'tachyons';
import {slides} from "./slides.text";
import {Heart} from "react-feather";
import './slides.styles.css';
const slide2 = slides;

class Slide extends Component{

constructor(props) {
    super(props);
    this.state = {
        visible: true,
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
                <p className="f5 lh-copy measure mt0-ns pl3">
                    {slide.id !== '5' ? slide.text.map((point) => <li className='pb2 grow list tl f4'>{point}</li>) :
                        Object.entries(slide.text).map(([title,link]) => <a href={link}><li className='grow list link2 tl f3'>{title}</li></a>)}
                </p>
            </div>
        </article>
        ))}
        </div>
    );}
}

export default Slide;

