import { useState } from 'react'
import './App.css'
import Header from './Header'
import Description from './Description'
import DogImage from './DogImage'
import DogListContainer from './DogListContainer'

export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const updateUrl = async (breed) => {
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      const data = await response.json()
      setDogUrl(data.message)
    } catch (error) {
      console.error('Error fetching dog image:', error)
    }
  }

  return (
    <div>
      <Header header="Dog Image Viewer"/>
      <Description description="犬の画像を紹介するサイトです。"/>
      <DogImage imageUrl={dogUrl} />
      <DogListContainer updateUrl={updateUrl} />
    </div>
  )
}

export default App
