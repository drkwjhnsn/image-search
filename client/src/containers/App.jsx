import React, { Component } from 'react';
import SearchBarContainer from './SearchBarContainer.jsx';
import Gallery from '../components/Gallery.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      modalImageIdx: -1
    }

    this.receiveImageMeta = this.receiveImageMeta.bind(this);
    this.selectModalImage = this.selectModalImage.bind(this);
  }

  receiveImageMeta(images) {
    this.setState({ images });
  }

  selectModalImage(modalImageIdx) {
    this.setState({ modalImageIdx });
  }

  render() {
    var { images } = this.state;
    return (
      <div>
        <SearchBarContainer passResults={this.receiveImageMeta} />
        <Gallery images={images} handleSelection={this.selectModalImage} />
      </div>
    );
  }
}
