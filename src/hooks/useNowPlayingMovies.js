import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constants'
import { addNowPlayingMovies } from '../Utils/movieSlice'


const useNowPlayingMovies = () => {

    //fetch data from tmdb api adn update the store
    const dispatch = useDispatch();
    //api call
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.result)
        dispatch(addNowPlayingMovies(json.result))
    };
    useEffect(() => {
        getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;
