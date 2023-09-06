import {classNames} from "shared/lib/classNames/classNames";
import cls from './Button.module.scss';
import React, {ReactNode, ButtonHTMLAttributes} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};