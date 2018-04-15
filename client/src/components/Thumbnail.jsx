import React from 'react';

export default ({ idx, uri, handleSelection }) => {
  function handleClick() {
    handleSelection(idx);
  }

  return (
    <img src={uri} onClick={handleClick}/>
  );
}
