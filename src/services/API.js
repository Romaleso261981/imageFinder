import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "e095a1290a6e5cce004c0f0ac9fc4656"

export async function getTrendingMovies() {
    const response = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
    return response.data
}

export async function getMovieById(id) {
        const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
    return response.data
}

export async function getCreditsById(id) {
        const response = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
    return response.data
}

export async function getReviewsById(id) {
        const response = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
    return response.data
}

export async function getSearchMovies(search) {
        const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${search}`);
    return response.data
}
// https://api.themoviedb.org/3/movie/${id}/reviews?api_key=e095a1290a6e5cce004c0f0ac9fc4656

