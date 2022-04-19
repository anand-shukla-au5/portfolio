const ApiKey = process.env.API_KEY

export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/all/week?api_key=${ApiKey}&language=en-US`
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${ApiKey}&language=en-US`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=28`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=35`,
    },
    fetchHorrorMovie: {
        title: 'Horror',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=27`,
    },
    fetchRomanceMovie: {
        title: 'Romance',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=10749`,
    },
    fetchMystery: {
        title: 'Mystery',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=9648`,
    },
    fetchSciFi: {
        title: 'Sci-Fi',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=878`,
    },
    fetchWestern: {
        title: 'Western',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=37`,
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=16`,
    },
    fetchTv: {
        title: 'TV Movie',
        url: `/discovery/movie?api_key=${ApiKey}&with_genres=10770`,
    }
}