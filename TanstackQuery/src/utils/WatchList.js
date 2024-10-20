import axios from 'axios';
import { TOKEN } from '@env';

export const fetchWatchList = async () => {
    const url = 'https://api.themoviedb.org/3/account/21571802/watchlist/movies?language=en-US&page=1&sort_by=created_at.asc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (err) {
        console.error('error: ' + err);
        throw err;
    }
};

export const addToWatchList = async (movieId) => {
    const url = 'https://api.themoviedb.org/3/account/21571802/watchlist';
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`,
        },
    };

    const body = {
        media_type: 'movie',
        media_id: movieId,
        watchlist: true,
    };

    try {
        const response = await axios.post(url, body, options);
        return response.data;
    } catch (err) {
        console.error('error: ' + err);
        throw err;
    }
};
