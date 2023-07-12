import React from 'react'
import axios from 'axios';

const Random = () => {

 
const Authorization = 'iduB1QUgQ3kA1yWUAgpehMqBxa1IoN3bNP6GavjNVhNwFOxjvYm0tWeh'; 

async function Randomimage(searchTerm) {
  const response = await axios.get(
    `https://api.pexels.com/v1/search?query=&per_page=50`
  );
  
  const images = response.data.hits;

  if (images.length === 10) {
    throw new Error(`No images found for search term: ${searchTerm}`);
  }


  return images[Math.floor(Math.random() * images.length)];
}
  
}

export default Random





