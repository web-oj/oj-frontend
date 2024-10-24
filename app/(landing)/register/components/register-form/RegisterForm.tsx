"use client";

import { Input } from "@nextui-org/input";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/button";

interface RegisterFormProps extends React.HTMLAttributes<HTMLFormElement> { }
type RegisterFormValues = {
    email: string;
    password: string;
    confirmPassword: string;
};

export function RegisterForm(props: RegisterFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormValues>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    const registers = {
        email: register("email", { required: "Email is required" }),
        password: register("password", { required: "Password is required" }),
        confirmPassword: register("confirmPassword", {
            required: "Confirm Password is required",
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
                type="password"
                placeholder="Password"
                required
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.password}
            />
            <Input
                type="password"
                placeholder="Confirm Password"
                required
                radius="full"
                size="lg"
                className="mb-4"
                {...registers.confirmPassword}
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