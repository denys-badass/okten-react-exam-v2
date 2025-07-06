import axios from "axios";

export const axiosMovieInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'accept': 'application/json',
    },
})

axiosMovieInstance.interceptors.request.use((request) => {
    request.headers.Authorization = 'Bearer ' + import.meta.env.VITE_API_AUTH_TOKEN;
    return request;
})

axiosMovieInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error: " + error.message);
        return Promise.reject(error);
    });