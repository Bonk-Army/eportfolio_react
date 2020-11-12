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
        const headerProps = { text: 'I\'m styled!' };

        const scope = {styled, headerProps};

        const code = `
  const Header = styled.div\`
    color: palevioletred;
    font-size: 18px;
  \`

  render(<Header>{headerProps.text}</Header>)
`
    return(
        <div className="h-100 w-100">
    <LiveProvider code={code} scope={scope} noInline={true} theme={dracula}>
        <LiveEditor/>
        <LiveError  className="h-100 w-100"/>
        <LivePreview className="bg-white h-100 w-100" />
    </LiveProvider>
        </div>);
}}

export default ReactEditor;
