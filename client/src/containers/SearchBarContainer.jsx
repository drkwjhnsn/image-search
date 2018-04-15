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
    this.setState({userPhrase: searchPhrase});
    console.log(searchPhrase);
    axios.post('/search', { searchPhrase })
    .then((response) => {
      console.log(response);
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
