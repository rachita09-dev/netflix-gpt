import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../Utils/constants'
import { addPopularMovies } from '../Utils/movieSlice'


const usePopularMovies = () => {

    //fetch data from tmdb api adn update the store
    const dispatch = useDispatch();
    //api call
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.result)
        dispatch(addPopularMovies(json.result))
    };
    useEffect(() => {
        getPopularMovies()
    }, [])
}

export default usePopularMovies;
