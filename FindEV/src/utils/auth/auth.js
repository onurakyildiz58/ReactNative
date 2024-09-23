/* eslint-disable prettier/prettier */
import axios from 'axios';
import { API_KEY } from '@env';

async function Auth(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    try {
        const response = await axios.post(url, { email, password, returnSecureToken: true });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Hata:', error.response ? error.response.data : error.message);
    }
}


export async function createUser(email, password) {
    await Auth('signUp', email, password);
}

export async function loginUser(email, password) {
    await Auth('signInWithPassword', email, password);
}
