import { LoginForm } from "./LoginForm";

export default function LoginFormWrapper() {
    return (
        <section className="flex flex-col gap-6 max-w-screen-sm lg:my-16">
            <div>
                <h2 className="font-bold text-2xl lg:text-4xl text-foreground">Login your account</h2>
                <p className="text-base text-foreground-500">Explore and practice problems, contest and so on</p>
            </div>
            <LoginForm />
        </section>
    )
}