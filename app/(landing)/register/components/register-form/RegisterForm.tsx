"use client";

import { Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React from "react";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";

import { signUp } from "@/fetch-functions";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp(data);
      toast.success("Registration successful");
      router.push("/login");
    } catch (error) {
      toast.error("Registration failed");
    }
  });

  const registers = {
    email: register("email", {
      required: "Email is required",
      pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
    }),
    password: register("password", { required: "Password is required" }),
    handle: register("handle", {
      required: "Handle is required",
    }),
  };

  return (
    <form
      {...props}
      className="flex flex-col gap-1 lg:min-w-[48ch]"
      onSubmit={onSubmit}
    >
      <Input
        required
        className="mb-4"
        placeholder="Email"
        radius="full"
        size="lg"
        type="email"
        {...registers.email}
      />
      <Input
        required
        className="mb-4"
        placeholder="Handle"
        radius="full"
        size="lg"
        type="text"
        {...registers.handle}
      />
      <Input
        required
        className="mb-4"
        placeholder="Password"
        radius="full"
        size="lg"
        type="password"
        {...registers.password}
      />
      <p className="text-danger">
        {errors.email?.message}
        {errors.password?.message}
      </p>
      <Button fullWidth color="primary" radius="full" size="lg" type="submit">
        Register
      </Button>
    </form>
  );
}
