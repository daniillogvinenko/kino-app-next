import { SignInForm } from "@/components/SignInForm";
import cls from "./page.module.scss";

export default async function SignInPage() {
    return (
        <div className={cls.SignInPage}>
            <SignInForm />
        </div>
    );
}
