import { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = ({ updateUrl }) => {
  const [breeds, setBreeds] = useState([])
  const [selectedBreed, setSelectedBreed] = useState('')

  useEffect(() => {

    const fetchBreeds = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/list/all')
        if (!response.ok) {
          throw new Error('Failed to fetch breeds')
        }
        const data = await response.json()
        const breedList = Object.keys(data.message)
        setBreeds(breedList)
      } catch (error) {
        console.error('Error fetching breeds:', error)
      }
    }

    fetchBreeds()
  }, [])

  return (
    <>
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <button onClick={() => updateUrl(selectedBreed)}>更新</button>
    </>
  )
}

export default DogListContainer
