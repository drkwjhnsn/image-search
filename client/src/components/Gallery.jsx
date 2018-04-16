import React from 'react';
import Thumbnail from './Thumbnail.jsx';

export default ({ images, handleSelection }) => (
  <div className="Gallery">
    { images.map((image, idx) => (
      <Thumbnail
        key={idx}
        idx={idx}
        { ...image.display_sizes[2] }
        handleSelection={handleSelection} />
      ))
    }
  </div>
);
