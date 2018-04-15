import React from 'react';

export default ({ image, handleClick }) => {
  return (
    <img src={image.display_sizes[0].uri} onClick={handleClick}/>
  );
}
