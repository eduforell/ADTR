import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home/Home';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import NotFound from './pages/404/NotFound';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
