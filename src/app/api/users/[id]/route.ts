import { NextRequest, NextResponse } from "next/server";
import { users as usersDB } from "../../db";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const users = usersDB;

    const user = users.find((u) => u.id === params.id);

    return NextResponse.json(user);
}
