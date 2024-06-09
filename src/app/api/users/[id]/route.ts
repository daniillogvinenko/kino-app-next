import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const user = await prisma.user.findUnique({
        where: {
            username: params.id,
        },
        include: {
            favoriteMovies: true,
        },
    });

    return NextResponse.json(user);
}
