interface CloseIconProps {
    onClick?: () => void;
}

export const CloseIcon = ({ onClick }: CloseIconProps) => {
    return (
        <svg
            onClick={onClick}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M1 1L15 15M15 1L1 15" stroke="#B5B5B5" />
        </svg>
    );
};
