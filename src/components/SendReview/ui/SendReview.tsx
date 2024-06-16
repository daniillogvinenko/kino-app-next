"use client";

import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import cls from "./SendReview.module.scss";
import { useState } from "react";

export const SendReview = () => {
    const [value, setValue] = useState("");

    return (
        <div className={cls.newReview}>
            <Input
                placeholder="Введите свой отзыв"
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button>Отправить</Button>
        </div>
    );
};
