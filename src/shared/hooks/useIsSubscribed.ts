import { useEffect, useState } from "react";
import { API } from "../consts/consts";
import { User } from "@prisma/client";

export const useIsSubscribed = (username: string | null | undefined) => {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (username) {
            fetch(`${API}/api/users/${username}`).then(async (response) => {
                const data: User = await response.json();
                setIsSubscribed(data.subscription!);
                setIsLoading(false);
            });
        }
    }, [username]);

    return { isSubscribed, isLoading };
};
