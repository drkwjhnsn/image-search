import React from 'react';

export default ({ submitPhrase }) => {
  function handleSubmit(e) {
    e.preventDefault();
    var $textInput = e.target.children['textInput'];
    submitPhrase($textInput.value);
    $textInput.value = '';
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="SearchBar-textInput"
        type="text"
        name="textInput"
        placeholder="Search for an Image..." />
      <input
        className="SearchBar-submitButton"
        type="submit" />
    </form>
  );
}
