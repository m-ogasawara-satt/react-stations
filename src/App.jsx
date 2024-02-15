import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Description from './Description';

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  );

  const updateUrl = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogUrl(data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  }

  return (
    <div>
      <Header />
      <Description dogUrl={dogUrl} updateUrl={updateUrl} />
    </div>
  );
}

export default App;
