import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import { magnifyingGlassImg } from '../../assets/imageUrl'
import '../../styles/header/searchForm.css'

const SearchForm: React.FC = () => {
  const navigate = useNavigate()
  const [searchName, setSearchName] = React.useState<string>('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value.toLowerCase().trim())
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchName) navigate(`search/${searchName}`)
  }

  return (
    <form
      className="search-form"
      onSubmit={(e) => handleFormSubmit(e)}
    >
      <input
        className='search-form__input'
        type='text'
        placeholder='pokemon name'
        autoComplete='off'
        value={searchName}
        onChange={(e) => handleSearchChange(e)}
      />

      <button
        className='search-form__btn'
        type='submit'
      >
        <img
          className='search-form__btn-icon'
          src={magnifyingGlassImg}
          alt="search icon"
        />
      </button>
    </form>
  )
}

export default SearchForm
