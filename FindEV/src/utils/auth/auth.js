/* eslint-disable prettier/prettier */
import axios from 'axios';
import { API_KEY, FIRESTORE } from '@env';

async function storeUserData(localId, name, city, email, token) {
    try {
        const userData = {
            name: name,
            city: city,
            email: email,
        };
        const response = await axios.put(`${FIRESTORE}/users/${localId}.json?auth=${token}`, userData);
        return response;
    } catch (error) {
        console.error('Error saving user data:', error.response ? error.response.data : error.message);
    }
}

export async function fetchLoggedInUser(localId, token) {
    try {
        const response = await axios.get(`${FIRESTORE}/users/${localId}.json?auth=${token}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error.response ? error.response.data : error.message);
        throw new Error('Could not fetch user data');
    }
}


export async function createUser(name, email, password, city) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    try {
        const response = await axios.post(url, { email, password, returnSecureToken: true });
        const token = response.data.idToken;
        const localId = response.data.localId;
        console.log(token, localId);
        await storeUserData(localId, name, city, email, token);
        return { token, localId };
    } catch (error) {
        console.error('Error during sign-up:', error.response ? error.response.data : error.message);
    }
}

export async function loginUser(email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;

    try {
        const response = await axios.post(url, { email, password, returnSecureToken: true });
        const token = response.data.idToken;
        const localId = response.data.localId;
        return { token, localId };
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw new Error('Login failed');
    }
}

