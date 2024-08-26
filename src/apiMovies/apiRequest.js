import axios from "axios";

//const url = 'https://api.themoviedb.org/3';
//const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';


const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODE3YTZiYThhZjU0YjkwZmZmNzFiNDdiMzBkZDlmZCIsIm5iZiI6MTcyNDMyMjIwMy4yNDk4NzQsInN1YiI6IjY2YzcwZWE0Y2YxNDdjMWFlZDU4NTAyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H4VygeZUejjvvml3utHrxCb7HdjssC_8N4F9p0KhORg';

const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization:API_KEY,
  },
});



export async function trendingMovies() {
  const { data } = await moviesApi.get('trending/movie/week');
  return data;
}

export async function searchMovies(query, page) {
  const params = { query, page };
  const { data } = await moviesApi.get('search/movie', { params });
  return data;
}
export async function detailsMovies(movieId) {
  const { data } = await moviesApi.get(`movie/${movieId}`);
  return data;
}
export async function creditsMovies(movieId) {
  const { data } = await moviesApi.get(`movie/${movieId}/credits`);
  return data;
}
export async function reviewsMovies(movieId, page) {
  const params = { page };
  const { data } = await moviesApi.get(`movie/${movieId}/reviews`, { params });
  return data;
}









