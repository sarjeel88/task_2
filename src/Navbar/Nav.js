import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
// import Footer from '../pages/Footer';


const PexelsSearch = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [comment, setComment] = useState([])

  const searchImages = async () => {
    try {
      const response = await axios.get(
        `https://api.pexels.com/v1/search?query=${query}&per_page=80`,
        {
          headers: {
            Authorization: "iduB1QUgQ3kA1yWUAgpehMqBxa1IoN3bNP6GavjNVhNwFOxjvYm0tWeh",
          },
        }
      );

      setImages(response.data.photos);
    } catch (error) {
      console.error(error);
    }
  };
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    searchImages();
  };

  useEffect(() => {
    axios("https://api.pexels.com/videos/search?=nature&per_page=1")
      .then(res => res.json())
      .then(data => setComment(data))
      .catch((err)=>{
        console.log(err)
      })
  }, [])

  return (

    <div className='input-field'>
      <div>
        <h2 className='dot_line' style={{
          textAlign: 'center',
          position: 'absolute',
          margin: '-107px 258px',
          fontSize: '32px',
          fontWeight: 'bold', 
          color:"white"
        }}>The best free stock photos, royalty <br /> free images & videos shared by creators. </h2>
      </div>
      <div style={{ margin: '200px' }}>
        <form onSubmit={handleSubmit}
          style={{
            textAlign: 'center',
            fontSize: '30px',
            display: 'flex'

          }} >
          <input className='form-control' style={{
            textAlign: 'center',
            // marginLeft: '399px',
            fontSize: '21px',
            border: '3px solid black',
            padding: '10px 16px',
            fontWeight: 'bold',
            color: 'gray',
            width: '630px',
            margin: 'auto',
            borderRadius: '15px'


          }}
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search images..."

          />
          <svg xmlns="http://www.w3.org/2000/svg"
            style={{
              color: 'gray',
              position: 'absolute',
              margin: '21px 631px'
            }} width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>


          <button className=' buttons1 fa fa-search button' style={{
            backgroundColor: 'white',
            fontSize: '21px',
            // border: '3px solid #0ff',
            marginLeft: '52px',
            color: 'white',
            padding: '5px 19px',
            cursor: 'pointer',
            fontWeight: 'bold',
            position: 'absolute',

            borderRadius: '10px',
            backgroundColor: 'gray',
            marginTop: '5px'
          }} type="submit">Search</button>


        </form>

       
        <div id="photos">
          {photos.map(photo => (
            <img key={photo.id} src={photo.src.medium} alt={photo.photographer} />
          ))}
          <div>
            <h5 style={{
              color: 'gray',
              margin: '5px 49px'
            }}>Trending:</h5>
            <Stack className='button5' style={{ margin: '-33px 132px' }} direction="row">
              <Button style={{ color: 'white', border: "none", fontWeight: 'bold', textTransform: 'none' }} variant="text">dark,</Button>
              <Button style={{ color: 'white', border: "none", fontWeight: 'bold', margin: '-23px', textTransform: 'none' }} variant="text">nature,</Button>
              <Button style={{ color: 'white', border: "none", fontWeight: 'bold', textTransform: 'none' }} variant="text">sky,</Button>
              <Button style={{ color: 'white', border: "none", fontWeight: 'bold', margin: '-24px', textTransform: 'none' }} variant="text">travel</Button>
              {/* <Button style={{color:'white', border:"none", fontWeight:'bold', textTransform:'none'}} variant="text">forest,</Button> */}

            </Stack>
          </div>
        </div>
      </div>
      <div>
          {images.map((image) => (
            <img className='column'
              style={{
                marginLeft: '30px',
                height: '240px',
                marginTop: '40px',
                borderRadius: '20px',
                float: 'left',
                width: '30.3%',
                padding: '5px',
                display: 'table',
                boxSizing: 'border-box',
                boxShadow: '5px 10px 10px',
                transition: '1s'
              }}
              key={image.id}
              src={image.src.original}
              alt={image.photographer}
            />
          ))}

        </div>
        {/* <Footer /> */}
    </div>

  );
};

export default PexelsSearch;
