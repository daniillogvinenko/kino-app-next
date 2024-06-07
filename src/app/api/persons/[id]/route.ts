import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const person = await prisma.person.findUnique({
        where: {
            id: +params.id
        },
        include: {
            actedInMovies: true,
            directedMovies: true
        }
    })
    return NextResponse.json(person);
}