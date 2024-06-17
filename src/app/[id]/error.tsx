"use client";

import cls from "./error.module.scss";
import { Button } from "@/components/ui/Button";

export default function NOTFOUND() {
    return (
        <div>
            <div className={cls.errorWrapper}>
                <span>Ой!</span> <p>Что-то пошло не так</p>
                <Button href="/">Вернуться на главную</Button>
            </div>
        </div>
    );
}
