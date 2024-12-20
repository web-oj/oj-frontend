"use client";

import { LinearContainer } from "@/components/ui";
import { Button, Image } from "@nextui-org/react";
import { ArrowRight01Icon } from "hugeicons-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export function Hero(props: Props) {
    return (
        <LinearContainer direction="row" fullwidth classnames={{
            container: "items-center justify-center",
        }}>
            <LinearContainer direction="column" space="lg">
                <p className="text-foreground-500">
                    # S Y N C U P  T E A M
                </p>
                <h1 className="text-6xl font-semibold max-w-screen-sm">Online Judge Platform</h1>
                <Button
                    as={Link}
                    className="bg-foreground-900 w-fit text-foreground-100"
                    radius="full"
                    endContent={
                        <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1 }}
                        >
                            <ArrowRight01Icon />
                        </motion.div>
                    }
                    href="/dashboard"
                >
                    Open App
                </Button>
            </LinearContainer>
            <LinearContainer direction="column" space="lg">
                <Image
                    src="./demo_card.png"
                    alt="Hero"
                    className="max-w-screen-sm"
                />
                <div className="flex flex-col">
                    <TypeAnimation
                        sequence={[
                            'IDE, Plagiarism, and more helpful tools',
                            1000,
                            '',
                        ]}
                        wrapper="h2"
                        speed={50}
                        className="text-foreground text-2xl font-semibold"
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                    />
                    <TypeAnimation
                        sequence={[
                            2000,
                            'for coder',
                            2000,
                        ]}
                        wrapper="h2"
                        speed={50}
                        className="text-foreground-500 text-2xl font-semibold"
                        style={{ fontSize: '2em', display: 'inline-block' }}
                        repeat={Infinity}
                        cursor={false}
                    />
                </div>
            </LinearContainer>
        </LinearContainer>
    )
}