import { Header } from "@/components/Header";
import cls from "./not-found.module.scss";
import { Button } from "@/components/ui/Button";

export default function NOTFOUND() {
    return (
        <div>
            <div className={cls.notFoundWrapper}>
                <span>Страницы не существует :{"("}</span>
                <br />
                <br />
                <br />
                <Button href="/">Вернуться на главную</Button>
            </div>
        </div>
    );
}
