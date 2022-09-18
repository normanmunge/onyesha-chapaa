import axios from "axios";

//todo ://fetch from .env
const API_KEY = 'AIzaSyDPq288PwgtZ3huw7IElbdSeAWSlKRG2-Q';

export async function createUser(email: string, password: string) {
    await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
        email: email,
        password: password,
        returnSecureToken: true
    })
}