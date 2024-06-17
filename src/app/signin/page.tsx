import { GitHubButton } from "@/components/GitHubButton";
import { SignInForm } from "@/components/SignInForm";
import cls from "./page.module.scss";

export default async function Home() {
    return (
        <div className={cls.Page}>
            <div className={cls.formWrapper}>
                <GitHubButton />
                <div className={cls.separator}></div>
                <SignInForm />
            </div>
        </div>
    );
}
