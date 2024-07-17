import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function GET(req: NextRequest) {
    // /persons
    const persons = await prisma.person.findMany({
        include: {
            actedInMovies: true,
            directedMovies: true,
        },
    });

    // /persons?search=abc
    const searchValue = req.nextUrl.searchParams.get("search");
    if (searchValue) {
        const filteredPersons = persons.filter((p) => p.fullName.toLowerCase().includes(searchValue.toLowerCase()));
        return NextResponse.json(filteredPersons);
    }

    return NextResponse.json(persons);
}
