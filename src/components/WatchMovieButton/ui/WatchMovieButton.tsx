"use client";

import { StarRating } from "@/components/StarRating";
import cls from "./WatchMovieButton.module.scss";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { API } from "@/shared/consts/consts";
import { cn } from "@/shared/helpers/classNames/classNames";
import Image from "next/image";
import { ChangeEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { InputRange } from "@/components/ui/InputRange";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { User } from "@prisma/client";

interface WatchMovieButtonProps {
    src: string | null;
}

/**
 * Button opens the movie player modal
 * @returns
 */
export const WatchMovieButton = ({ src }: WatchMovieButtonProps) => {
    const [windowIsOpen, setWindowIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [controlsIsVisible, setControlsIsVisible] = useState(false);
    const [rateModalIsOpened, setRateModalIsOpened] = useState(false);
    const [subscribeModalIsOpened, setSubscribeModalIsOpened] = useState(false);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);
    const volumeInputRef = useRef<HTMLInputElement>(null);
    const session = useSession();
    const user = session.data?.user;
    const router = useRouter();

    useEffect(() => {
        if (user?.name) {
            fetch(`${API}/api/users/${user?.name}`).then(async (response) => {
                const data: User = await response.json();
                console.log(data);
                setIsSubscribed(data.subscription!);
            });
        }
    }, [user?.name]);

    const handleOpen = () => {
        if (user) {
            if (isSubscribed) {
                setWindowIsOpen(true);
            } else {
                setSubscribeModalIsOpened(true);
            }
        } else {
            router.push("/signin");
        }
    };

    const handleClose = () => {
        setWindowIsOpen(false);
        videoRef.current?.pause();
    };

    const handlePlayPause = () => {
        if (videoRef.current?.paused) {
            videoRef.current?.play();
            setIsPlaying(true);
        } else {
            videoRef.current?.pause();
            setIsPlaying(false);
        }
    };

    const handleEnterFullScreen = () => {
        divRef.current?.requestFullscreen();
        setIsFullscreen(true);
    };

    const handleLeaveFullScreen = () => {
        document.exitFullscreen();
        setIsFullscreen(false);
    };

    const onTimeUpdate = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        timeInputRef!.current!.value = String((+e.currentTarget.currentTime / +e.currentTarget.duration) * 100);
    };

    // event -> 0 - 100%
    const handleTimeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        videoRef!.current!.currentTime = (+e.target.value * videoRef!.current!.duration) / 100;
    };

    const handleVolumeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        videoRef!.current!.volume = +e.target.value / 100;
    };

    const handleReplay = () => {
        videoRef!.current!.currentTime -= 10;
    };

    const handleSkip = () => {
        videoRef!.current!.currentTime += 10;
    };

    const debouncedCallback = useDebouncedCallback(() => {
        setControlsIsVisible(false);
    }, 3000);

    const handleMouseMove = () => {
        setControlsIsVisible(true);
        debouncedCallback();
    };

    const handleOnEnded = () => {
        setRateModalIsOpened(true);
        setWindowIsOpen(false);
        handleLeaveFullScreen();
    };

    const handleSubscribe = () => {
        fetch(`${API}/api/users/${user?.name}`, {
            method: "PATCH",
            body: JSON.stringify({ operation: "subscribe" }),
            cache: "no-store",
        });
    };

    console.log(isSubscribed);

    return (
        <>
            <Modal
                className={cls.subscribeModal}
                isOpen={subscribeModalIsOpened}
                onClose={() => setSubscribeModalIsOpened(false)}
            >
                <div className={cls.modalContent}>
                    <div className={cls.left}>
                        <p className={cls.title}>Вы подключаете</p>
                        <div className={cls.tarifCard}>
                            <Image src={`${API}/static/icons/appLogo.svg`} alt="" width={50} height={50} />
                            <p className={cls.tarifTitle}>MovieVault+</p>
                            <p className={cls.price}>299 ₽ в месяц</p>
                        </div>
                    </div>
                    <div className={cls.right}>
                        <p className={cls.title}>Банковская карта</p>
                        <div className={cls.cardsWrapper}>
                            <div className={cls.cardFlex}>
                                <div>•••• 5796</div>
                                <Image src={`${API}/static/icons/tick.svg`} alt="tick" width={19.5} height={12.5} />
                            </div>
                            <div className={cls.cardFlex}>
                                <div>•••• 3458</div>
                            </div>
                        </div>
                        <p>Сейчас вы платите 299 ₽</p>
                        <Button onClick={handleSubscribe} className={cls.payBtn} size={"lg"}>
                            Подключить
                        </Button>
                        <p>
                            Следующее списание 299 ₽ — 29 июля. Мы напомним об этом за 3 дня — никаких неожиданностей.
                        </p>
                    </div>
                </div>
            </Modal>
            <Modal className={cls.rateModal} isOpen={rateModalIsOpened} onClose={() => setRateModalIsOpened(false)}>
                <div onMouseMove={handleMouseMove} className={cls.modalContent}>
                    <StarRating />
                </div>
            </Modal>
            <Modal className={cls.playerModal} onClose={handleClose} isOpen={windowIsOpen}>
                <div className="container">
                    <div onMouseMove={handleMouseMove} className={cls.modalContent} ref={divRef}>
                        <video
                            onClick={handlePlayPause}
                            onTimeUpdate={onTimeUpdate}
                            onEnded={handleOnEnded}
                            ref={videoRef}
                            src={`${API}/static/video/movies/${src}`}
                        />
                        <div className={cn(cls.controls, { [cls.controlsHidden]: !controlsIsVisible }, [])}>
                            <InputRange onChange={handleTimeInputChange} className={cls.timeInput} ref={timeInputRef} />
                            <div className={cls.btnWrapper}>
                                <div className={cls.leftButtons}>
                                    {isPlaying ? (
                                        <Image
                                            onClick={handlePlayPause}
                                            src="/static/icons/pause.svg"
                                            alt="playBtn"
                                            width={32}
                                            height={32}
                                        />
                                    ) : (
                                        <Image
                                            onClick={handlePlayPause}
                                            src="/static/icons/play.svg"
                                            alt="playBtn"
                                            width={32}
                                            height={32}
                                        />
                                    )}
                                    <Image
                                        onClick={handleReplay}
                                        src={`/static/icons/replay10s.svg`}
                                        alt="replay"
                                        width={28}
                                        height={28}
                                    />
                                    <Image
                                        onClick={handleSkip}
                                        src={`/static/icons/skip10s.svg`}
                                        alt="replay"
                                        width={28}
                                        height={28}
                                    />
                                    {/* <input
                                        onChange={handleVolumeInputChange}
                                        ref={volumeInputRef}
                                        className={cls.volumeInput}
                                        type="range"
                                    /> */}
                                    <InputRange
                                        onChange={handleVolumeInputChange}
                                        className={cls.volumeInput}
                                        ref={volumeInputRef}
                                    />
                                </div>

                                {isFullscreen ? (
                                    <Image
                                        onClick={handleLeaveFullScreen}
                                        src="/static/icons/leaveFullscreen.svg"
                                        alt="playBtn"
                                        width={32}
                                        height={32}
                                    />
                                ) : (
                                    <Image
                                        onClick={handleEnterFullScreen}
                                        src="/static/icons/fullscreen.svg"
                                        alt="playBtn"
                                        width={32}
                                        height={32}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Button onClick={handleOpen}>Смотреть</Button>
        </>
    );
};
