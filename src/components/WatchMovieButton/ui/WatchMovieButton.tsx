"use client";

import cls from "./WatchMovieButton.module.scss";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import Image from "next/image";
import { ChangeEvent, SyntheticEvent, useEffect, useRef, useState } from "react";

interface WatchMovieButtonProps {
    src?: string;
}

export const WatchMovieButton = ({
    src = "http://localhost:3000/static/video/movies/4.mp4",
}: WatchMovieButtonProps) => {
    const [windowIsOpen, setWindowIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpen = () => {
        setWindowIsOpen(true);
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

    const handleFullScreen = () => {
        divRef.current?.requestFullscreen();
    };

    const onTimeUpdate = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        inputRef!.current!.value = String((+e.currentTarget.currentTime / +e.currentTarget.duration) * 100);
    };

    // event -> 0 - 100%
    const handleTimeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        videoRef!.current!.currentTime = (+e.target.value * videoRef!.current!.duration) / 100;
    };

    return (
        <>
            <Modal onClose={handleClose} isOpen={windowIsOpen}>
                <div className="container">
                    <div className={cls.modalContent} ref={divRef}>
                        <video onTimeUpdate={onTimeUpdate} ref={videoRef} src={src}></video>
                        <div className={cls.controls}>
                            <input
                                ref={inputRef}
                                onChange={handleTimeInputChange}
                                className={cls.timeInput}
                                type="range"
                            />
                            <div className={cls.btnWrapper}>
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
                                    onClick={handleFullScreen}
                                    src="/static/icons/fullscreen.svg"
                                    alt="playBtn"
                                    width={32}
                                    height={32}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            <Button onClick={handleOpen}>Смотреть</Button>
        </>
    );
};
