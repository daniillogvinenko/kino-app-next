import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(req: NextRequest) {
    const movieId = req.nextUrl.searchParams.get("movieId");
    if (movieId) {
        const reviewsOfMovie = await prisma.review.findMany({
            where: {
                movieId: +movieId,
            },
            include: {
                user: true,
            },
        });
        return NextResponse.json(reviewsOfMovie);
    }

    const reviews = await prisma.review.findMany();

    return NextResponse.json(reviews);
}

export async function POST (req: Request) {
    const body = await req.json()

    await prisma.review.create({
        data: {
            text: body.text,
            dateTime: '2022-01-05T00:00:00.000Z',
            username: body.username,
            movieId: +body.movieId,
        }
    })

    return NextResponse.json('success')
}

export async function DELETE (req: Request, res: NextApiResponse) {
    const body = await req.json()

    await prisma.review.delete({
        where: {
            id: body.id
        }
    })

    return NextResponse.json('success')
}