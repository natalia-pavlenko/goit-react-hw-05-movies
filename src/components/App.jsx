import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout';

// import styled from "styled-components";
const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

// import NotFoutd from "path/to/pages/NotFoutd";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies-search" element={<Movies />} />
          <Route path="movieDetails " element={<MovieDetails/>} />
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        {/* <Route path = "*" element= {<NotFoutd/>}/> */}
      </Routes>
    </div>
  );
};
