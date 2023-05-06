import { Routes, Route, NavLink } from "react-router-dom";
// import { useState, } from "react";
import styled from "styled-components";
import  {Home}  from "pages/Home";
import  {Movies}  from "pages/Movies";
import {MovieDetails} from "pages/MovieDetails";


const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;


export const App = () => {
// const [id, setId] = useState('')

// const getId = movieId => {
//   setId(movieId)
  
// }

// useEffect(()=>{
//  if(!id){
//   return
//  }
//  const getMoviesById = async () => {
//   try {
//       const res = await fetchById(id); 
//       console.log(res);
//       // setMovies(results)  
//   } catch (error) {
//      console.log(error.message); 
//   }
// }
// getMoviesById()
// },[id])

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
