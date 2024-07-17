import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    // /movies/4
    const movie = await prisma.movie.findUnique({
        where: {
            id: +params.id,
        },
        include: {
            mainActors: true,
            director: true,
        },
    });
    return NextResponse.json(movie);
}
