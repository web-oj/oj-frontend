import { API_URL } from "@/config/constants";
import axios from "axios";

export const api = axios.create({
    baseURL: API_URL,
});