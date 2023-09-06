import {classNames} from "shared/lib/classNames/classNames";
import cls from './Checkbox.module.scss';
import React, {ReactNode} from "react";

interface CheckboxProps extends React.HTMLProps<HTMLInputElement>{
    className?: string;
    children: ReactNode;
}

export const Checkbox = (props: CheckboxProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props;


    return (
        <div className={cls.inputContainer}>
            <label className={cls.checkbox} htmlFor={otherProps.id}>
                <input type='checkbox' {...otherProps} className={classNames('', {}, [className])} />
                <span className={cls['checkbox--tick']}></span>
                {children}
            </label>
        </div>
    );
};