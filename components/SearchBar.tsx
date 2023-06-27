"use client"

import { useState } from 'react';
import { SearchManufacturer } from './';
import Image from 'next/image';

const SearchButton = () => (
  <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
    <Image  
      src="/magnifying-glass.svg"
      all="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
)

const SearchBar = ( {otherClasses}: { otherClasses: string } ) => {
  const [manufacturer, setManufacturer] = useState("")
  const handleSearch = () => {}

  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
              manufacturer={manufacturer}
              setManufacturer={setManufacturer}
            />
            <SearchButton otherClasses />
        </div>
    </form>
  )
}

export default SearchBar