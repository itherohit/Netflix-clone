const API_KEY = "ba0729094f87e8643146c6ab8e1486de";

const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY }&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
    fetchActianMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY }&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY }&with_genres=99`,
    fetchAnimateMovies: `/discover/movie?api_key=${API_KEY }&with_genres=16`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY }&with_genres=80`,
    fetchHistoryMovies: `/discover/movie?api_key=${API_KEY }&with_genres=36`,
    fetchScienceMovies: `/discover/movie?api_key=${API_KEY }&with_genres=878`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY }&with_genres=10749`,
    fetchWarMovies: `/discover/movie?api_key=${API_KEY }&with_genres=10752`,
}

export default request;