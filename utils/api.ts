import { API_URL } from "@/config/constants";
import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    if (token) {
        config.headers["x-access-token"] = token;
    }
    return config;
});