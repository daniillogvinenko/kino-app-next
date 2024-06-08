"use client";

import { Button } from "../ui/Button";
import { useSession, signOut } from "next-auth/react";

export const SignOutButton = () => {
    const session = useSession();

    return <Button onClick={() => signOut({ callbackUrl: "/" })}>Выйти</Button>;
};
