import { Review } from "@/types/types";
import { NextResponse } from "next/server";

const reviews: Review[] = [
    {
        id: "1",
        movieId: "1",
        userId: "1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum assumenda at nostrum voluptatum iusto quas hic? Nostrum accusamus numquam eum.",
    },
    {
        id: "2",
        movieId: "1",
        userId: "1",
        text: "klg kl ap Lorem ipsum dolor sit amet consect etur adip s isi cing el it. Earum ass umen da at nost sg srum voluptatum iusto quas hic? Nostrum accusamus numquam eum.",
    },
];

export async function GET() {
    return NextResponse.json(reviews);
}
