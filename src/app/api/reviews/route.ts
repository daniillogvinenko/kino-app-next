import { NextRequest, NextResponse } from "next/server";
import { reviews } from "../db";

export async function GET(req: NextRequest) {
    const movieId = req.nextUrl.searchParams.get("movieId");
    if (movieId) {
        const reviewsForMovie = reviews.filter((r) => r.movieId === movieId);
        console.log(movieId, reviewsForMovie);
        return NextResponse.json(reviewsForMovie);
    }

    return NextResponse.json(reviews);
}
