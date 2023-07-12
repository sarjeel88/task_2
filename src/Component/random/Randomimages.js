import React, { useState } from 'react';
import { Random } from './Random';

function Randomimages() {
  const [image, setImage] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSearch(e) {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const image = await Random(searchTerm);
      setImage(image);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {image && (
        <div>
          <h2>{image.tags}</h2>
          <img src={image.webformatURL} alt={image.tags} />
        </div>
      )}
    </div>
  );
}

export default Randomimages;