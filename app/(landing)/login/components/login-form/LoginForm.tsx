"use client";

import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/button";

interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type LoginFormValues = {
    email: string;
    password: string;
};

export function LoginForm(props: LoginFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormValues>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    const registers = {
        email: register("email", { required: "Email is required" }),
        password: register("password", { required: "Password is required" }),
    }

    return (
        <form
            {...props}
            onSubmit={onSubmit}
            className="flex flex-col gap-1"
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
                Login
            </Button>
        </form>
    );
}