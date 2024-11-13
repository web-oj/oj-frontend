import { API_URL } from "@/config/constants";
import { User } from "@/types";
import { api } from "@/utils/api";

export async function signUp(params: {
    email: string;
    password: string;
    handle: string;
}) {
    try {
        const res = await api.post("/user/sign-up", params);

        return res.data;
    } catch (error) {
        throw new Error("Failed to sign up");
    }
}

export async function login(params: { email: string; password: string }): w {
    try {
        const res = await api.post("/user/login", params);

        return res.data;

    } catch (error) {
        throw new Error("Failed to sign in");
    }
}

export async function getUser(params: { user_id: number }): Promise<User> {
    try {
        const res = await api.get<User>(`/user/${params.user_id}`);

        return res.data;
    } catch (error) {
        throw new Error("Failed to get user");
    }
}

