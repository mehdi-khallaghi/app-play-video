import { MovieDetail } from './components/MovieDetail/movieDetailcomponent';
import RCounter from './components/RCounter/reduxCounterComponent';
import FooterComponent from './components/common/footer';
import Movie from './components/movie/movieComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Movie />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/rcounter" exact  element={<RCounter />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
