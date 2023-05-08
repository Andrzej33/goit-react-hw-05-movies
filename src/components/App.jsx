import { Routes, Route } from "react-router-dom";

// import { useState, } from "react";

import  {Home}  from "pages/Home";
import  {Movies}  from "pages/Movies";
import {MovieDetails} from "pages/MovieDetails";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Cast } from "pages/Cast";





export const App = () => {


  return (
    
   
      <Routes>
<Route path="/" element={<SharedLayout />}>
<Route index element={<Home/>}/>
<Route path="movies" element={<Movies/>}/>
<Route path="movies/:movieId" element={<MovieDetails/>}>
<Route path="cast" element={<Cast/>}/>
<Route path="review" element={<MovieDetails/>}/>
</Route>
<Route path="*" element={<Home/>}/>
</Route>
      </Routes>
    
  );
};
