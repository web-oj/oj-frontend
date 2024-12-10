"use client";

import { Input } from "@nextui-org/react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ErrorMessage } from "@hookform/error-message";
import { toast } from "react-toastify";

import { login } from "@/fetch-functions";
import { useAuth } from "@/app/context";

interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> {}
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
      const token = await login(data);

      console.log("Login successful", token);
      authLogin(token);
      toast.success("Login successful");
      router.push("/dashboard");
    } catch (error) {
      toast.error("Login failed");
      console.error("Login failed", error);
    }
  };

  const onSubmitError: SubmitErrorHandler<LoginFormValues> = (errors) => {
    console.log(errors);
  };

  const registers = {
    email: register("email", { required: "Email is required" }),
    password: register("password", { required: "Password is required" }),
  };

  return (
    <form
      {...props}
      className="flex flex-col gap-1 lg:min-w-[48ch]"
      onSubmit={handleSubmit(onSubmit, onSubmitError)}
    >
      <Input
        className="mb-4"
        placeholder="Email"
        radius="full"
        size="lg"
        type="text"
        {...registers.email}
      />
      <Input
        className="mb-4"
        placeholder="Password"
        radius="full"
        size="lg"
        type="password"
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
      <Button fullWidth color="primary" radius="full" size="lg" type="submit">
        Login
      </Button>
    </form>
  );
}
