import axios from 'axios';
import { TOKEN } from '@env';

const options = {
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`,
    },
};

export const fetchMovies = async ({pageParam}) => {
    const url = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${pageParam}`;

    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (err) {
        console.error('error: ' + err);
        throw err;
    }
};

export const fetchMovieDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (err) {
        console.error('error: ' + err);
        throw err;
    }
};
