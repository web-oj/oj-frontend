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

export async function login(params: { email: string; password: string }) {
    try {
        const res = await api.post("/user/login", params);

        return res.data;

    } catch (error) {
        throw new Error("Failed to sign in");
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


export async function createProblem(params: {
    title: string;
    statement: string;
    difficulty: string;
    /**
     * @ignore: tags are not implemented yet
     */
    // tags: string[]; 
    timeLimit: number;
    memoryLimit: number;
    inputFormat: string;
    outputFormat: string;
    solutionText: string;
}) {
    try {
        const res = await api.post("/problem/create_problem", params);

        return res.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create problem");
    }
}