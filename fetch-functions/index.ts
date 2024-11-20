import type { User, Problem } from "@/types";
import { api } from "@/utils/api";

// User functions

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

export async function login(params: { email: string; password: string }) {
    try {
        const res = await api.post("/user/login", params);

        return res.data;
    } catch (error) {
        throw new Error("Failed to sign in");
    }
}

export async function getUserIdByToken() {
    try {
        const res = await api.get(`/user/get-user-id-from-token`);
        return res.data;
    } catch (error) {
        console.error("Failed to get user by token", error);
        throw new Error("Failed to get user by token");
    }
}
export async function getUser(params: { user_id: number }): Promise<User> {
    try {
        const res = await api.get<User>(`/user/id/${params.user_id}`);

        return res.data;
    } catch (error) {
        throw new Error("Failed to get user");
    }
}

export async function register(params: {
    email: string;
    password: string;
    confirmPassword: string;
}) {
    try {
        const res = await api.post("/user/register", params);

        return res.data;
    } catch (error) {
        throw new Error("Failed to register");
    }
}
