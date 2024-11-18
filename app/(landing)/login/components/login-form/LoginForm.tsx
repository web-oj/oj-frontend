"use client";

import { Input } from "@nextui-org/input";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";
import { login } from "@/fetch-functions";
import { useAuth } from "@/app/context";
import { toast } from "react-toastify";

interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type LoginFormValues = {
    email: string;
    password: string;
};

export function LoginForm(props: LoginFormProps) {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>();

    const { login: authLogin } = useAuth();

    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        try {
            const response = await login(data);
            console.log("Login successful:", response);
            authLogin(response.token);
            router.push("/dashboard");
        } catch (error) {
            toast.error("Login failed");
            console.error("Login failed", error);
        }
    };

    const onSubmitError: SubmitErrorHandler<LoginFormValues> = (errors) => {
        console.log(errors);
    }

    const registers = {
        email: register("email", { required: "Email is required" }),
        password: register("password", { required: "Password is required" }),
    }

    return (
        <form
            {...props}
            onSubmit={handleSubmit(onSubmit, onSubmitError)}
            className="flex flex-col gap-1 lg:min-w-[48ch]"
        >
            <Input
                type="text"
                placeholder="Email"
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.email}
            />
            <Input
                type="password"
                placeholder="Password"
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.password}
            />
            <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => <p className="text-red-500">{message}</p>}
            />
            <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => <p className="text-red-500">{message}</p>}
            />
            <Button
                type="submit"
                radius="full"
                fullWidth
                size="lg"
                color="primary"
            >
                Login
            </Button>
        </form>
    );
}