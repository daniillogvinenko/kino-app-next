interface PauseIconProps {
    onClick?: () => void;
}

export const PauseIcon = ({ onClick }: PauseIconProps) => {
    return (
        <svg
            onClick={onClick}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect x="6" y="2" width="7" height="27" fill="white" />
            <rect x="19" y="2" width="7" height="27" fill="white" />
        </svg>
    );
};