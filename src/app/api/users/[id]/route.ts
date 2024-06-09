import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                username: params.id,
            },
            include: {
                favoriteMovies: true,
            },
        });

        return NextResponse.json(user);
    } catch (error) {
        return NextResponse.error();
    }
}
