import React, { Component } from 'react';
// import SearchBarContainer from './SearchBarContainer.jsx';
import axios from 'axios';
import SearchBar from '../components/SearchBar.jsx';
import Gallery from '../components/Gallery.jsx';
import ImageModal from '../components/ImageModal.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPhrase: '',
      images: [],
      modalImageIdx: -1
    }

    this.fetchResults = this.fetchResults.bind(this);
    this.selectModalImage = this.selectModalImage.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  fetchResults(searchPhrase) {
    if (searchPhrase === '') return;
    this.setState({userPhrase: searchPhrase});
    axios.post('/search', { searchPhrase })
    .then((response) => {
      var { images, result_count } = response.data;
      this.setState({
        images,
        resultCount: result_count
      });
    })
    .catch((err) => {
      console.log(err);
    })
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
        <SearchBar submitPhrase={this.fetchResults}/>
        <Gallery images={images} handleSelection={this.selectModalImage} />
        { ternaryWrappedModal }
      </div>
    );
  }
}
