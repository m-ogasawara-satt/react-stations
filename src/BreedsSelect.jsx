// @ts-check

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleBreedChange = (event) => {
    setSelectedBreed(event.target.value)
  }

  return (
    <select value={selectedBreed} onChange={handleBreedChange}>
      <option value="">Select a breed</option>
      {breeds.map((breed, index) => (
        <option key={index} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  )
}

export default BreedsSelect
