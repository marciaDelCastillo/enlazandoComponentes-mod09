import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper.js';
import GenresInDb from './GenresInDb.js';
import LastMovieInDb from './LastMovieInDb.js';
import ContentRowMovies from './ContentRowMovies.js';
import Error404 from './Error404.js';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Routes>
            <Route path="/" element={<ContentWrapper/>}/>
            <Route path="/GenresInDb" element={<GenresInDb/>}/>
            <Route path="/LastMovieInDb" element={<LastMovieInDb/>}/>
            <Route path="/ContentRowMovies" element={<ContentRowMovies/>}/>
            <Route path='*' element={<Error404/>}/>
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
