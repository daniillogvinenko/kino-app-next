import { NextResponse } from "next/server";
import { persons } from "../db";

export async function GET() {
    return NextResponse.json(persons);
}
