import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';

import Layout from './Layout';

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies';
import MovieDetailsPage from '../pages/MovieDetails';
import CastPage from '../pages/CastPage';
import ReviewsPage from '../pages/ReviewsPage';

// const Home = lazy(() => import('../pages/Home/Home'));
// const Movies = lazy(() => import('../pages/Movies'));
// const MovieDetailsPage = lazy(() => import('../pages/MovieDetails'));
// const CastPage = lazy(() => import('../pages/CastPage'));
// const ReviewsPage = lazy(() => import ('../pages/ReviewsPage'))
// import NotFoutd from "path/to/pages/NotFoutd";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
        </Route>
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
