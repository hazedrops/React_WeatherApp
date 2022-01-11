import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

function SearchBar() {
  const [isTyped, setIsTyped] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setIsTyped(true);

    setInputValue(e.target.value);
  }

  const handleClear = () => {
    console.log("Clear button clicked!!");
    setInputValue("");
    setIsTyped(false);
  }

  return (
    <form className="searchBar">
      <input type="text" value={inputValue} placeholder="Search City or Zip Code" onChange={handleChange} />
        <div 
          className =  {`${!isTyped ? 'none' : 'button clear'}`}
          onClick={handleClear}
        >
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </div>
        <button className="button searchButton">
        <FontAwesomeIcon icon={faSearch} size="lg" />
      </button>
    </form>
  )
}

export default SearchBar

