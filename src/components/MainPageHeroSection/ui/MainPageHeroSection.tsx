"use client";

import { Button } from "@/components/ui/Button";
import cls from "./MainPageHeroSection.module.scss";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export const MainPageHeroSection = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

    const items: { background: string; title: string; description: string; link: string }[] = [
        {
            background: 'url("/static/images/pages/hero-main-bg.png") center/cover fixed',
            title: "Однажды в… Голливуде",
            description: "2019 | Драма, комедия",
            link: "/movies/4",
        },
        {
            background: 'url("/static/images/pages/hero-main-bg2.jpg") center/cover fixed',
            title: "Омерзительная восьмерка",
            description: "2015 | Вестерн, криминал, триллер, драма, детектив",
            link: "/movies/3",
        },
        {
            background: 'url("/static/images/pages/hero-main-bg3.jpg") center/cover fixed',
            title: "Крестный отец",
            description: "1972 | Драма, криминал",
            link: "/movies/7",
        },
    ];

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {items.map((item, index) => (
                    <div key={index} className="embla__slide">
                        <div style={{ background: item.background }} className={cls.MainPageHeroSection}>
                            <div className="container">
                                <div className={cls.wrapper}>
                                    <h1>{item.title}</h1>
                                    <div className={cls.about}>{item.description}</div>
                                    <div className={cls.button}>
                                        <Button href={item.link}>Смотреть</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
