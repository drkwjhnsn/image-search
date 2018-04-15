import React, { Component } from 'react';
import SearchBarContainer from './SearchBarContainer.jsx';
import Gallery from '../components/Gallery.jsx';

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
    var { images } = this.state;
    return (
      <div>
        <SearchBarContainer passResults={this.receiveImageMeta} />
        <Gallery images={images} />
      </div>
    );
  }
}
