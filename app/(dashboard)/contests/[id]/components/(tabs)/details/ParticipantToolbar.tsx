"use client";

import { useContest } from "@/app/(dashboard)/contests/context";
import { useAuth } from "@/app/context";
import { LinearContainer } from "@/components/ui";
import { registerForContest, unregisterForContest } from "@/fetch-functions";
import { Button } from "@nextui-org/react";
import { Login01Icon, Logout01Icon } from "hugeicons-react";
import React from "react";
import { toast } from "react-toastify";

interface Props extends React.HTMLAttributes<HTMLDivElement> { }
export default function ParticipantToolbar(props: Props) {
    const { user } = useAuth();
    const contest = useContest();
    const [isRegistered, setIsRegistered] = React.useState<boolean>(false);

    const Register = () => {
        const register = async () => {
            try {
                if (!user) {
                    toast.error("You must be logged in to register for a contest");
                    return;
                }

                await registerForContest({
                    id: contest.data.id,
                    userId: user?.id,
                });

                toast.success("Successfully registered for contest");
            } catch (error) {
                toast.error("Failed to register for contest");
            }
        }


        return (
            <Button
                color="primary"
                radius="full"
                onClick={register}
                startContent={
                    <Login01Icon />
                }
            >
                Register
            </Button>
        )
    }

    const UnRegister = () => {
        const unregister = async () => {
            try {
                if (!user) {
                    toast.error("You must be logged in to unregister for a contest");
                    return;
                }

                await unregisterForContest({
                    id: contest.data.id,
                    userId: user?.id,
                });

                toast.success("Successfully unregistered for contest");
            } catch (error) {
                toast.error("Failed to unregister for contest");
            }
        }

        return (
            <Button
                color="danger"
                radius="full"
                onClick={unregister}
                startContent={
                    <Logout01Icon />
                }
            >
                Unregister
            </Button>
        )
    }

    React.useEffect(() => {
        if (user && contest.data.participations) {
            setIsRegistered(contest.data.participations.some((p) => p.userId === user.id));
        }
    }, [user, contest.data.participations]);

    return (
        <LinearContainer
            direction="row"
            className="absolute top-4 right-4"
            classnames={{
                container: "items-center justify-end",
            }}
        >
            {isRegistered ? <UnRegister /> : <Register />}
        </LinearContainer>
    )
}