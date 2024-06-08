import { Button } from "@/components/ui/Button";
import cls from "./MainPageHeroSection.module.scss";

export const MainPageHeroSection = () => {
    return (
        <div className={cls.MainPageHeroSection}>
            <div className="container">
                <div className={cls.wrapper}>
                    <h1>Однажды в… Голливуде</h1>
                    <div className={cls.about}>2019 | Драма, комедия</div>
                    <div className={cls.button}>
                        <Button>Смотреть</Button>
                        {/* <Button>Смотреть</Button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};
