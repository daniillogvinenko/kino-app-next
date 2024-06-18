import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET() {
    const persons = await prisma.person.findMany({
        include: {
            actedInMovies: true,
            directedMovies: true,
        },
    });

    return NextResponse.json(persons);
}
