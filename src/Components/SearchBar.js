import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'
import WeatherAppContext from '../context/WeatherAppContext';

function SearchBar() {
  const { isTyped, inputValue, handleChange, handleClear, handleSearch } = useContext(WeatherAppContext);

  return (
    <form className="searchBar">
      <input type="text" value={inputValue} placeholder="Search City or Zip Code" onChange={handleChange} />
        <div 
          className =  {`${!isTyped ? 'none' : 'button clear'}`}
          onClick={handleClear}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </div>
        <button className="button searchButton" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  )
}

export default SearchBar

