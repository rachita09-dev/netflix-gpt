import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';


const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) : (<>    <MainContainer />
          <SecondaryContainer /></>)
      }


      {/* 
      mainContainer
      - videoBackground
      -videoTitle

      secondaryContainer
      - movieList * n
          - cards * n

      
      */}
    </div>
  )
}

export default Browse