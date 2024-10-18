import axios from 'axios';
import { TOKEN } from '@env';

export const fetchMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
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
    }
};
