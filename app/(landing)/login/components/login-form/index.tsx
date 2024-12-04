"use client";

import { Link } from "@nextui-org/link";
import { LoginForm } from "./LoginForm";
import { motion } from "framer-motion";

export default function LoginFormWrapper() {
    return (
        <motion.section
            className="flex flex-col gap-6 max-w-screen-sm lg:my-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <h2 className="font-bold text-2xl lg:text-4xl text-foreground">Login your account</h2>
                <p className="text-base text-foreground-500">Explore and practice problems, contest and so on</p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <LoginForm />
            </motion.div>
            <motion.p
                className="text-base text-foreground-500 text-center w-full"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                Don't have an account? <Link href={"./register"} className="text-primary">Sign up</Link>
            </motion.p>
        </motion.section>
    );
}