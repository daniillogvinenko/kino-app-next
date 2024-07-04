interface PlayIconProps {
    onClick?: () => void;
}

export const PlayIcon = ({ onClick }: PlayIconProps) => {
    return (
        <svg
            onClick={onClick}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M2 29.5V1.5L29 15.5L2 29.5Z" fill="white" />
        </svg>
    );
};
