import axios from "axios";

const API_KEY = '**********';

async function Auth(mode, email, password){
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`

    const response = axios.post(url, { email, password, returnSecureToken: true });

    console.log(response.data)
}

export async function createUser(email, password) {
    await Auth('signUp', email, password)
}

export async function loginUser(email, password) {
    await Auth('signInWithPassword', email, password)
}