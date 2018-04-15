import React, { Component } from 'react';
import SearchBarContainer from './SearchBarContainer.jsx';
import Gallery from '../components/Gallery.jsx';
import ImageModal from '../components/ImageModal.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      modalImageIdx: -1
    }

    this.receiveImageMeta = this.receiveImageMeta.bind(this);
    this.selectModalImage = this.selectModalImage.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  receiveImageMeta(images) {
    this.setState({ images });
  }

  selectModalImage(modalImageIdx) {
    this.setState({ modalImageIdx });
  }

  closeModal() {
    this.setState({modalImageIdx: -1});
  }

  render() {
    var { images, modalImageIdx } = this.state;
    var ternaryWrappedModal = modalImageIdx !== -1
      ? <ImageModal
        image={images[modalImageIdx]}
        handleClick={this.closeModal} />
      : '';

    return (
      <div>
        <SearchBarContainer passResults={this.receiveImageMeta} />
        <Gallery images={images} handleSelection={this.selectModalImage} />
        { ternaryWrappedModal }
      </div>
    );
  }
}
