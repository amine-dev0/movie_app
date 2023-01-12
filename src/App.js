import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Movie from './movieDetail/movie';





function App() {

  
  

  return (
    <>
      <Router>
         
            <Routes>
                <Route index element={<Main />}></Route>
                <Route  path="movie/:id" element={<Movie />}>
                  
                </Route>
                
            </Routes>
        </Router>
      
    </>
  );
}

export default App;
