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
        try {
            const {data} = await axiosUserInstance.post('/login', {
                username,
                password
            });
            return data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                throw new Error(`Authentication Failed: ${error.response?.data?.message || error.message}`);
            }
            throw new Error(`Unknown Error: ${error}`);
        }
    },
}

axiosUserInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", {
            url: error.config?.url,
            method: error.config?.method,
            status: error.response?.status,
            message: error.message
        });
        return Promise.reject(error);
    });