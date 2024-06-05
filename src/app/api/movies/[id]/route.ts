import { NextRequest, NextResponse } from "next/server";
import { movies as moviesDB } from "../../db";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    const movies = moviesDB;

    const movie = movies.find((m) => m.id === params.id);

    return NextResponse.json(movie);
}
