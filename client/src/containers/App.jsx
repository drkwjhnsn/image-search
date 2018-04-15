import React, { Component } from 'react';
import SearchBarContainer from './SearchBarContainer.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }

    this.receiveImageMeta = this.receiveImageMeta.bind(this);
  }

  receiveImageMeta(images) {
    this.setState({ images });
  }

  render() {
    return (
      <SearchBarContainer passResults={this.receiveImageMeta} />
    );
  }
}
