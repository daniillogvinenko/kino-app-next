"use client";

import cls from "./WatchMovieButton.module.scss";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { API } from "@/shared/consts/consts";
import Image from "next/image";
import { ChangeEvent, SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";

interface WatchMovieButtonProps {
    src: string;
}

export const WatchMovieButton = ({ src }: WatchMovieButtonProps) => {
    const [windowIsOpen, setWindowIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
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

    const handleEnterFullScreen = () => {
        divRef.current?.requestFullscreen();
        setIsFullscreen(true);
    };

    const handleLeaveFullScreen = () => {
        document.exitFullscreen();
        setIsFullscreen(false);
    };

    const onTimeUpdate = (e: SyntheticEvent<HTMLVideoElement, Event>) => {
        inputRef!.current!.value = String((+e.currentTarget.currentTime / +e.currentTarget.duration) * 100);
    };

    // event -> 0 - 100%
    const handleTimeInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        videoRef!.current!.currentTime = (+e.target.value * videoRef!.current!.duration) / 100;
    };

    const handleReplay = () => {
        videoRef!.current!.currentTime -= 10;
    };

    const handleSkip = () => {
        videoRef!.current!.currentTime += 10;
    };

    return (
        <>
            <Modal onClose={handleClose} isOpen={windowIsOpen}>
                <div className="container">
                    <div className={cls.modalContent} ref={divRef}>
                        <video
                            onClick={handlePlayPause}
                            onTimeUpdate={onTimeUpdate}
                            ref={videoRef}
                            src={`${API}/static/video/movies/${src}`}
                        ></video>
                        <div className={cls.controls}>
                            <input
                                ref={inputRef}
                                onChange={handleTimeInputChange}
                                className={cls.timeInput}
                                type="range"
                            />
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
