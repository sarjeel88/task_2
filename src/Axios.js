import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          'https://api.pexels.com/v1/curated?per_page=10',
          {
            headers: {
              Authorization: 'Bearer YOUR_PEXELS_API_KEY',
            },
          }
        );

        if (!response.ok) {
          throw new Error('Error fetching photos');
        }

        const data = await response.json();
        setPhotos(data.photos);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.src.small} alt={photo.photographer} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
