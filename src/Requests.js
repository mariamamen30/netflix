const API_KEY = "67d7267f2b48dd11bd2563f76636668c";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover>tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover>tv?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover>tv?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover>tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomancemovies: `/discover>tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover>tv?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
