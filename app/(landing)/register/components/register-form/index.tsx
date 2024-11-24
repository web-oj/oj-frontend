"use client";

import { motion } from "framer-motion";

import { RegisterForm } from "./RegisterForm";

export default function RegisterFormWrapper() {
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
          Get started
        </h2>
        <p className="text-base text-foreground-500">
          Register new account to start
        </p>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <RegisterForm />
      </motion.div>
    </motion.section>
  );
}
