import React from 'react';

export default ({ image, handleClick }) => {
  return (
    <div
      className="ImageModal-backdrop"
      onClick={handleClick}>
      <img className= "ImageModal-img"
        src={image.display_sizes[0].uri} />
    </div>
  );
}
