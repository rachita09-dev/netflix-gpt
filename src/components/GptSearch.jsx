import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { BG_URL } from '../Utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='fixed -z-10'>
        <img className="h-screen object-cover" src= {BG_URL} alt='BackgroundImage' />

      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch;