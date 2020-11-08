import React from 'react';
import 'tachyons';
import {slides} from "./slides.text";

const slide2 = slides;

const Slide = ({ slides }) => {
    return (
        <div className="bg-black">
        {slide2.map(slide => (
        <article className="yellow cf ph3 ph5-ns pv5 p5 center">
            <header className="fn fl-ns w-50-ns pr4-ns">
                <h1 className="f2 lh-title fw9 mb3 mt0 pt3 bt bw2">
                    {slide.topic}
                </h1>
                <h2 className="f3 white lh-title">
                    {slide.smallTopic}
                </h2>
            </header>
            <div className="white fn fl-ns w-50-ns">
                <p className="f5 lh-copy measure mt0-ns">
                    {slide.text}
                </p>
                <p className="f5 lh-copy measure">
                    {slide.text}
                </p>
            </div>
        </article>
        ))}
        </div>
    );
}

export default Slide;

