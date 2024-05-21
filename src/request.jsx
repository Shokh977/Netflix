const key = "4006ac5b3151ee9602663799e285527a";

const requests = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}`,
  top_rated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}`,
  // tv_series: `https://api.themoviedb.org/3/account/21013567/rated/tv/episodes?api_key=${key}language=en-US&page=1&sort_by=created_at.asc`,
};

export default requests;