import { NextRequest, NextResponse } from "next/server";
import { movies, users } from "../db";

export async function GET(req: NextRequest) {
    const userId = req.nextUrl.searchParams.get("userId");

    if (userId) {
        const user = users.find((u) => u.id === userId);

        const moviesOfUser = movies.filter((m) => user?.favorites.includes(m.id));
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
