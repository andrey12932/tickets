import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeToggler.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";

interface ThemeTogglerProps {
    className?: string
}

export const ThemeToggler = (props: ThemeTogglerProps) => {
    const {
        className
    } = props;

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames(cls.ThemeToggler, {}, [className])}>
            <label className={cls.switch}>
                <input checked={theme === Theme.DARK} onInput={toggleTheme} type="checkbox" />
                <span className={classNames(cls.slider, {}, [cls['round']])}></span>
            </label>
            <span>
                Темная тема
            </span>
        </div>
    );
};