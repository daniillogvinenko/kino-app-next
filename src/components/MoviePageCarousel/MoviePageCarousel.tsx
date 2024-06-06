"use client";

import { Movie } from "@/shared/types/types";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface MoviePageCarouselProps {
    movie: Movie;
}

export const MoviePageCarousel = ({ movie }: MoviePageCarouselProps) => {
    return (
        <Carousel>
            {movie?.otherImages?.map((img) => (
                <img style={{ aspectRatio: "16 / 9", objectFit: "cover" }} key={img} src={img} alt="" />
            ))}
        </Carousel>
    );
};
