import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
    // /movies
    const movies = await prisma.movie.findMany({
        include: {
            director: true,
            mainActors: true,
        },
    });

    // /movies?userId=1
    const userId = req.nextUrl.searchParams.get("userId");
    if (userId) {
        const moviesOfUser = await prisma.movie.findMany({
            where: {
                favoredBy: {
                    some: {
                        username: userId,
                    },
                },
            },
        });
        return NextResponse.json(moviesOfUser);
    }

    // /movies?search=abc
    const searchValue = req.nextUrl.searchParams.get("search");
    if (searchValue) {
        const filteredMovies = movies.filter((m) => m.title.toLowerCase().includes(searchValue.toLowerCase()));
        return NextResponse.json(filteredMovies);
    }

    return NextResponse.json(movies);
}
