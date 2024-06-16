import cls from "./Footer.module.scss";

export const Footer = () => {
    return (
        <footer className={cls.Footer}>
            <div className="container">
                <div className={cls.wrapper}>©Daniil Logvinenko</div>
            </div>
        </footer>
    );
};
