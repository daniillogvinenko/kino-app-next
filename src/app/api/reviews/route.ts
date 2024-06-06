import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
    const movieId = req.nextUrl.searchParams.get("movieId");
    if (movieId) {
        const reviewsForMovie = prisma.review.findMany({
            where: {
                movieId: +movieId,
            },
        });
        return NextResponse.json(reviewsForMovie);
    }

    const reviews = await prisma.review.findMany();
    return NextResponse.json(reviews);
}
