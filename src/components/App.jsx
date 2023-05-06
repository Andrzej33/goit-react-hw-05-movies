import { Routes, Route } from "react-router-dom";
import { StyledLink } from "./StyledLink/StyledLink";
// import { useState, } from "react";

import  {Home}  from "pages/Home";
import  {Movies}  from "pages/Movies";
import {MovieDetails} from "pages/MovieDetails";





export const App = () => {


  return (
    <div>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        {/* <StyledLink to="/products">Products</StyledLink> */}
      </nav>
      <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/movies" element={<Movies/>}/>
<Route path="/movies/:movieId" element={<MovieDetails/>}/>
<Route path="/movies/:movieId/cast" element={<MovieDetails/>}/>
<Route path="/movies/:movieId/review" element={<MovieDetails/>}/>
<Route path="*" element={<Home/>}/>
      </Routes>
    </div>
  );
};
