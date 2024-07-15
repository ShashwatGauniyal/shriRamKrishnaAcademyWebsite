import React, { useState } from 'react';

const ImageUploader = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleImageUpload} />
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {images.map((image, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={image} alt={`Uploaded ${index}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
