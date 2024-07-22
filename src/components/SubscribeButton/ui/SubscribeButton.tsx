"use client";

import cls from "./SubscribeButton.module.scss";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { AppLogoIcon } from "@/components/ui/icons/AppLogoIcon";
import { TickIcon } from "@/components/ui/icons/TickIcon";
import { API } from "@/shared/consts/consts";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";

interface SubscribeButtonProps {
    children: ReactNode;
}

// todo - обработать запрос (перезагрузка страницы)
export const SubscribeButton = ({ children }: SubscribeButtonProps) => {
    const [subscribeModalIsOpened, setSubscribeModalIsOpened] = useState(false);
    const { data } = useSession();

    const router = useRouter();

    const handleSubscribe = () => {
        fetch(`${API}/api/users/${data?.user?.name}`, {
            method: "PATCH",
            body: JSON.stringify({ operation: "subscribe" }),
            cache: "no-store",
        }).then(() => {
            router.refresh();
            setSubscribeModalIsOpened(false);
            console.log("refresh");
        });
    };

    return (
        <>
            <Modal
                lazy
                className={cls.subscribeModal}
                isOpen={subscribeModalIsOpened}
                onClose={() => setSubscribeModalIsOpened(false)}
            >
                <div className={cls.modalContent}>
                    <div className={cls.left}>
                        <p className={cls.title}>Вы подключаете</p>
                        <div className={cls.tarifCard}>
                            <AppLogoIcon />
                            <p className={cls.tarifTitle}>MovieVault+</p>
                            <p className={cls.price}>299 ₽ в месяц</p>
                        </div>
                    </div>
                    <div className={cls.right}>
                        <p className={cls.title}>Банковская карта</p>
                        <div className={cls.cardsWrapper}>
                            <div className={cls.cardFlex}>
                                <div>•••• 1234</div>
                                <TickIcon />
                            </div>
                            <div className={cls.cardFlex}>
                                <div>•••• 1234</div>
                            </div>
                        </div>
                        <p>Сейчас вы платите 299 ₽</p>
                        <Button variant={"gradient"} onClick={handleSubscribe} className={cls.payBtn} size={"lg"}>
                            Подключить
                        </Button>
                        <p>
                            Следующее списание 299 ₽ — 29 июля. Мы напомним об этом за 3 дня — никаких неожиданностей.
                        </p>
                    </div>
                </div>
            </Modal>
            <Button variant={"gradient"} onClick={() => setSubscribeModalIsOpened(true)}>
                {children}
            </Button>
        </>
    );
};
