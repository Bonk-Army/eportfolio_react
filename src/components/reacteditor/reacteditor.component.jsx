import React, {Component} from "react";
import dracula from 'prism-react-renderer/themes/dracula';
import {
    LiveProvider,
    LiveEditor,
    LiveError,
    LivePreview
} from 'react-live';

import styled from 'styled-components';

class ReactEditor extends React.Component {

    render() {

    return(
        <div className="black h-100 w-100">
    <LiveProvider code={`
class Counter extends React.Component {
constructor() {
super();
this.state = {
visible: true}
}
render() {
return(this.state.visible ? <div>Hello</div> : <div>bye</div>);
}
}
`} theme={dracula}>
        <LiveEditor/>
        <LiveError className="light-red h-100 w-100"/>
        <LivePreview className="bg-white h-100 w-100" />
    </LiveProvider>
        </div>);
}}

export default ReactEditor;
