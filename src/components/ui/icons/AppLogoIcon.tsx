interface AppLogoIconProps {
    className?: string;
}

export const AppLogoIcon = ({ className }: AppLogoIconProps) => {
    return (
        <svg
            className={className}
            width="29"
            height="32"
            viewBox="0 0 29 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M3.65599 11.7628L21.18 0.76797C24.4968 -1.31283 28.8 1.07957 28.8 5.00517V26.9948C28.8 30.92 24.4968 33.3128 21.18 31.232L3.65599 20.2372C0.536384 18.2796 0.536384 13.7204 3.65599 11.7628Z"
                fill="#4BB7FD"
            />
            <path
                d="M25.144 11.7628L7.62 0.76797C4.3032 -1.31283 0 1.07957 0 5.00517V26.9948C0 30.92 4.3032 33.3128 7.62 31.232L25.144 20.2372C28.2636 18.2796 28.2636 13.7204 25.144 11.7628Z"
                fill="#7B6EF6"
            />
        </svg>
    );
};
