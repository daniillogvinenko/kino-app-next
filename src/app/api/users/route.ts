import { User } from "@/types/types";
import { NextResponse } from "next/server";

const users: User[] = [
    {
        id: "1",
        username: "testUsername",
        password: "test",
        favorites: ["2"],
    },
];

export async function GET() {
    return NextResponse.json(users);
}
