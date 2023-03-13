import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';
// const API_KEY = 'e095a1290a6e5cce004c0f0ac9fc4656';

export async function getTrendingMovies(page) {
  const response = await axios.get(`/character/?page=${page}`);
  console.log(response);
  return response.data;
}

export async function getMovieById(id) {
  const response = await axios.get(`/character/${id}`);
  console.log(response.data);
  return response.data;
}

export async function getCreditsById(id) {
  const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return response.data;
}

export async function getReviewsById(id) {
  const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return response.data;
}

export async function getSearchMovies(search) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${search}`,
  );
  return response.data;
}
// https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e095a1290a6e5cce004c0f0ac9fc4656
