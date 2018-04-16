import React from 'react';

export default ({ idx, uri, handleSelection }) => {
  function handleClick() {
    handleSelection(idx);
  }

  return (
    <div className="Thumbnail">
      <img src={uri} onClick={handleClick}/>
    </div>
  );
}
