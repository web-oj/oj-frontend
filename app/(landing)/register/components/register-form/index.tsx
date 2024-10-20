import { RegisterForm } from "./RegisterForm";

export default function RegisterFormWrapper() {
    return (
        <section className="flex flex-col gap-6 max-w-screen-sm lg:my-16">
            <div>
                <h2 className="font-bold text-2xl lg:text-4xl text-foreground">Get started</h2>
                <p className="text-base text-foreground-500">Register new account to start</p>
            </div>
            <RegisterForm />
        </section>
    )
}