import React, { useState } from 'react';
import axios from 'axios';

const PexelsDropdown = () => {
  const [category, setCategory] = useState('');
  const [photos, setPhotos] = useState([]);

  const apiKey = 'iduB1QUgQ3kA1yWUAgpehMqBxa1IoN3bNP6GavjNVhNwFOxjvYm0tWeh';

  const searchPhotos = async () => {
    try {
      const response = await axios.get(`https://api.pexels.com/v1/search?query=${category}&per_page=100`, {
        headers: {
          Authorization: apiKey
        }
      });

      setPhotos(response.data.photos);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <select value={category} onChange={handleCategoryChange} className='form-control' style={{ 
          textAlign: 'center',
          marginLeft: '10px',
          fontSize:'21px', 
          border:'3px solid black',
          // borderRadius:'100px',
          padding:'10px 16px',
          fontWeight:'bold',
          color: 'gray'

        }}>
        <option value="">Select Category</option>
        <option value="Nature">Nature</option>
        <option value="Architecture">Architecture</option>
        <option value="People">People</option>
      </select>

      <button className='fa fa-search button' style={{ 
          backgroundColor: 'white', 
          marginLeft: '10px',
          fontSize:'21px', 
          border:'3px solid #0ff',
          borderRadius:'100px',
          color: 'gray',
          padding:'10px 16px',
          cursor:'pointer',
          fontWeight:'bold'
          }} onClick={searchPhotos}>Search</button>

      <div id="photos">
        {photos.map(photo => (
          <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
        ))}
      </div>
    </div>
  );
};

export default PexelsDropdown;
