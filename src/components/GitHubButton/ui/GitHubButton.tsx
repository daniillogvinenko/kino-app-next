"use client";

import { Button } from "@/components/ui/Button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import cls from "./GitHubButton.module.scss";
import Image from "next/image";
import { API } from "@/shared/consts/consts";

/**
 * Button for signing up with GitHub. Should be used on sign in page
 * @returns
 */
export const GitHubButton = () => {
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    return (
        <Button className={cls.GitHubButton} onClick={() => signIn("github", { callbackUrl })}>
            <Image src={`${API}/static/icons/githubLogo.svg`} alt="" width={24} height={24} />
            Sign in with Github
        </Button>
    );
};
