import React from 'react';
import Thumbnail from './Thumbnail.jsx';

export default ({ images }) => (
  <div>
    { images.map((image) => <Thumbnail { ...image.display_sizes[2] } /> )}
  </div>
);
