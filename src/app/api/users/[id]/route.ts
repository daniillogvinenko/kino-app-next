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

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
    const body = await req.json();

    // adds new favorite movie
    if (body.operation === "add") {
        await prisma.user.update({
            where: {
                username: params.id,
            },
            data: {
                favoriteMovies: {
                    connect: {
                        id: +body.movieId,
                    },
                },
            },
        });
    }

    // removes favorite movie
    if (body.operation === "remove") {
        await prisma.user.update({
            where: {
                username: params.id,
            },
            data: {
                favoriteMovies: {
                    disconnect: {
                        id: +body.movieId,
                    },
                },
            },
        });
    }

    return NextResponse.json("success");
}
