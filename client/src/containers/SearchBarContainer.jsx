import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar.jsx';

export default class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPhrase: ''
    };
    this.fetchResults = this.fetchResults.bind(this);
  }

  fetchResults(searchPhrase) {
    if (searchPhrase === '') return;
    var { passResults } = this.props;
    this.setState({userPhrase: searchPhrase});
    axios.post('/search', { searchPhrase })
    .then((response) => {
      passResults(response.data.images);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <SearchBar submitPhrase={this.fetchResults}/>
    );
  }
}
