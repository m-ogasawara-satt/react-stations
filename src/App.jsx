// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import DogImage from './DogImage'
import Description from './Description'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  return (
    <div>
      <h2>
        <Header />
      </h2>
      <Description />
      <img src={dogUrl} alt="Dog" />
      <button onClick={() => setDogUrl('写真更新')}>更新する</button>
    </div>
  )
}

export default App
