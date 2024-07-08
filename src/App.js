import { MovieDetail } from './components/MovieDetail/movieDetailcomponent';
import RCounter from './components/RCounter/reduxCounterComponent';
import RcounterClass from './components/RcounterClass';
import FooterComponent from './components/common/footer';
import Movie from './components/movie/movieComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserComponent from './components/user';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Movie />} />
          <Route path="/movie-detail/:id" element={<MovieDetail />} />
          <Route path="/rcounter" exact  element={<RCounter />} />
          <Route path="/rcounter-class" exact  element={<RcounterClass />} />
          <Route path="/users" exact  element={<UserComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App;
