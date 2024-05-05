import axios from 'axios';

export const API = axios.create({
    baseURL: "http://localhost:5050/api/v1",
    headers: {"Content-type": "application/json"},
});