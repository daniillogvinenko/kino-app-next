import { NextResponse } from "next/server";
import { users } from "../db";

export async function GET() {
    return NextResponse.json(users);
}
