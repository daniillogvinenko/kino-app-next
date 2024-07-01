"use client";

import { Button } from "@/components/ui/Button";
import { API } from "@/shared/consts/consts";
import { useRouter } from "next/navigation";

// todo - обработать запрос (перезагрузка страницы)
export const UnsubscribeButton = ({ username }: { username: string }) => {
    const router = useRouter();

    const handleUnsubscribe = () => {
        fetch(`${API}/api/users/${username}`, {
            method: "PATCH",
            body: JSON.stringify({ operation: "unsubscribe" }),
            cache: "no-store",
        }).then(() => router.refresh());
    };

    return <Button onClick={handleUnsubscribe}>Отменить подписку</Button>;
};
