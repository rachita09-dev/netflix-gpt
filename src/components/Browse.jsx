import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './secondaryContainer';


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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