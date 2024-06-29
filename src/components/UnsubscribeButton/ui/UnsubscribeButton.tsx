"use client";

import { Button } from "@/components/ui/Button";
import { API } from "@/shared/consts/consts";

export const UnsubscribeButton = ({ username }: { username: string }) => {
    const handleUnsubscribe = () => {
        fetch(`${API}/api/users/${username}`, {
            method: "PATCH",
            body: JSON.stringify({ operation: "unsubscribe" }),
            cache: "no-store",
        });
    };

    return <Button onClick={handleUnsubscribe}>Отменить подписку</Button>;
};
