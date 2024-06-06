import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
    const movies = await prisma.movie.findMany();

    const userId = req.nextUrl.searchParams.get("userId");

    if (userId) {
        const user = await prisma.user.findUnique({
            where: {
                username: userId,
            },
        });

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

    const searchValue = req.nextUrl.searchParams.get("search");
    if (searchValue) {
        const filteredMovies = movies.filter(
            (m) =>
                m.title.toLowerCase().includes(searchValue.toLowerCase()) ||
                m.description.toLowerCase().includes(searchValue.toLowerCase())
        );
        return NextResponse.json(filteredMovies);
    }

    return NextResponse.json(movies);
}
