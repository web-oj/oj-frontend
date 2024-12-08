"use client";

import { Link } from "@nextui-org/link";
import { motion } from "framer-motion";

import { LoginForm } from "./LoginForm";

export default function LoginFormWrapper() {
  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col gap-6 max-w-screen-sm lg:my-16"
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="font-bold text-2xl lg:text-4xl text-foreground">
          Login your account
        </h2>
        <p className="text-base text-foreground-500">
          Explore and practice problems, contest and so on
        </p>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <LoginForm />
      </motion.div>
      <motion.p
        animate={{ opacity: 1, y: 0 }}
        className="text-base text-foreground-500 text-center w-full"
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Don&apos;t have an account?{" "}
        <Link className="text-primary" href={"./register"}>
          Sign up
        </Link>
      </motion.p>
    </motion.section>
  );
}
