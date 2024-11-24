"use client";

import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/button";
import { signUp } from "@/fetch-functions";
import { toast } from "react-toastify";

interface RegisterFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type RegisterFormValues = {
    email: string;
    password: string;
    handle: string;
};

export function RegisterForm(props: RegisterFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    const onSubmit = handleSubmit(async (data) => {
        try {
            await signUp(data);
            toast.success("Registration successful");
        } catch (error) {
            toast.error("Registration failed");
        }
    });

    const registers = {
        email: register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email" } }),
        password: register("password", { required: "Password is required" }),
        handle: register("handle", {
            required: "Handle is required",
            // validate: (value) => value === data.password || "Passwords do not match"
        }),
    }

    return (
        <form
            {...props}
            onSubmit={onSubmit}
            className="flex flex-col gap-1 lg:min-w-[48ch]"
        >
            <Input
                type="email"
                placeholder="Email"
                required
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.email}
            />
            <Input
                type="text"
                placeholder="Handle"
                required
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.handle}
            />
            <Input
                type="password"
                placeholder="Password"
                required
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.password}
            />
            <p className="text-danger">
                {errors.email?.message}
                {errors.password?.message}
            </p>
            <Button
                type="submit"
                radius="full"
                fullWidth
                size="lg"
                color="primary"
            >
                Register
            </Button>
        </form>
    );
}