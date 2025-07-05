import axios from "axios";
import type {IUser} from "../models/IUser.ts";

const axiosUserInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const userService = {
    userLogin: async (username: string, password: string): Promise<IUser> => {
        const {data} = await axiosUserInstance.post('/login', {
            username,
            password
        });
        return data;
    },
}

axiosUserInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("Error: " + error.message);
        return Promise.reject(error);
    });