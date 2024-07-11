import "@/shared/styles/index.scss";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

const mockSession: Session = {
    expires: "2025-01-01T00:00:00Z",
    user: {
        name: "user1",
        email: "user1@mail.ru",
        image: "user1.png",
    },
};

export const sessionDecorator = (authorized: boolean) => (story: any) => (
    <SessionProvider session={authorized ? mockSession : undefined}>{story()}</SessionProvider>
);
