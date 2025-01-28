import axios from 'axios';

const API_KEY = process.env.EXPO_PUBLIC_API_KEY;
const FIRESTORE = process.env.EXPO_PUBLIC_API_URL;

async function storeUserData(localId, name, email, token) {
    try {
        const userData = {
            name: name,
            email: email,
        };
        const response = await axios.put(`${FIRESTORE}/users/${localId}.json?auth=${token}`, userData);
        return response;
    } catch (error) {
        console.error('Error saving user data:', error.response ? error.response.data : error.message);
    }
}

export async function resetPasswordMail(email) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${API_KEY}`;

    try {
        const response = await axios.post(url, {
            requestType: 'PASSWORD_RESET',
            email: email,
        });
        console.log('Password reset email sent:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending password reset email:', error.response ? error.response.data : error.message);
        throw new Error(error.response ? error.response.data.error.message : 'Failed to send reset email.');
    }
}

export async function createUser(name, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;

    try {
        const response = await axios.post(url, { email, password, returnSecureToken: true });
        const token = response.data.idToken;
        const localId = response.data.localId;
        const refreshToken = response.data.refreshToken;
        console.log("request token : ", refreshToken);
        await storeUserData(localId, name, email, token);
        return { token, localId, refreshToken};
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
        const refreshToken = response.data.refreshToken;
        console.log("request token : ", refreshToken);
        return { token, localId, refreshToken };
    } catch (error) {
        console.error('Error during login:', error.response ? error.response.data : error.message);
        throw new Error('Login failed');
    }
}

