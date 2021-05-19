const API_KEY = "67d7267f2b48dd11bd2563f76636668c";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover>tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchDrama: `/discover/movie?api_key=${API_KEY}&with_genres=18&primary_release_year=2014`,
  fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover>tv?&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover>tv?api_key=${API_KEY}&with_genres=27`,
  fetchRomancemovies: `/discover>tv?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `/discover>tv?api_key=${API_KEY}&with_genres=99`,
  fetchTheatre: `/discover/movie?api_key=${API_KEY}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`,
};

export default requests;
