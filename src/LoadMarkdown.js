import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import {render} from 'react-dom'

class LoadMarkdown extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { 
                  rawMarkdown: "",
                  myurl: props.name,
     };
  }

  componentWillMount() {
    fetch(
      this.state.myurl
    )
      .then((response) => response.text())
      .then((text) => {
        this.setState({ rawMarkdown: text });
      });
  }

  render() {
    const markdown = this.state.rawMarkdown;
    return <ReactMarkdown remarkPlugins={[gfm]} children={markdown} />;
  }
}

export default LoadMarkdown;
