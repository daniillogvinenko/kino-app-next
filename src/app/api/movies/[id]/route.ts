import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const movie = await prisma.movie.findUnique({
        where: {
            id: +params.id,
        },
    });
    console.log(movie);
    return NextResponse.json(movie);
}
